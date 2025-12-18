import type { Script } from '../types';
import { rawScripts } from '../data/scripts';

export class ScriptService {
	/**
	 * 获取所有脚本数据
	 */
	static async getScripts(language: string = 'en'): Promise<Script[]> {
		try {
			return rawScripts.map((raw) => {
				const translation = raw.translations[language] || raw.translations['en'];
				const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
				const scriptUrl = raw.url.startsWith('http') ? raw.url : `${baseUrl}/installs/${raw.url}`;
				const command = `curl -fsSL ${scriptUrl} | bash`;

				return {
					id: raw.id,
					url: raw.url,
					sourceUrl: raw.sourceUrl,
					name: translation.name,
					description: translation.description,
					command: raw.command || command,
				};
			});
		} catch (error) {
			console.error('加载脚本数据失败:', error);
			throw new Error('加载脚本数据失败');
		}
	}


	/**
	 * 根据ID获取单个脚本
	 */
	static async getScript(id: string, language: string = 'en'): Promise<Script> {
		try {
			const scripts = await this.getScripts(language);
			const script = this.findScriptById(scripts, id);

			if (!script) {
				throw new Error(`Script with ID ${id} not found`);
			}

			return script;
		} catch (error) {
			console.error(`加载脚本 ${id} 失败:`, error);
			throw new Error(`加载脚本 ${id} 失败`);
		}
	}

	/**
	 * 根据ID获取脚本
	 */
	static findScriptById(scripts: Script[], id: string): Script | undefined {
		return scripts.find((script) => script.id === id);
	}

	/**
	 * 根据名称搜索脚本
	 */
	static searchScripts(scripts: Script[], keyword: string): Script[] {
		if (!keyword) return scripts;

		const lowerKeyword = keyword.toLowerCase();
		return scripts.filter(
			(script) =>
				script.name.toLowerCase().includes(lowerKeyword) ||
				script.description.toLowerCase().includes(lowerKeyword)
		);
	}
}