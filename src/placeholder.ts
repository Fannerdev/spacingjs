/*
 * @Author: Fanner
 * @Date: 2021-11-11 03:17:35
 * @LastEditors: Fanner
 * @LastEditTime: 2021-11-11 03:22:31
 * @Description: 
 * @FilePath: \spacingjs\src\placeholder.ts
 */
import { PlaceholderType } from './type';

export function createPlaceholderElement(
	type: PlaceholderType,
	width: number,
	height: number,
	top: number,
	left: number,
	color: string
): void {
	let placeholder: HTMLDivElement = document.createElement('div');
	placeholder.classList.add(`spacing-js-${type}-placeholder`);
	placeholder.style.border = `2px solid ${color}`;
	placeholder.style.position = 'fixed';
	placeholder.style.background = 'none';
	placeholder.style.borderRadius = '2px';
	placeholder.style.padding = '0';
	placeholder.style.margin = '0';
	placeholder.style.width = `${width - 2}px`;
	placeholder.style.height = `${height - 2}px`;
	placeholder.style.top = `${top - 1}px`;
	placeholder.style.left = `${left - 1}px`;
	placeholder.style.pointerEvents = 'none';
	placeholder.style.zIndex = '9999';
	placeholder.style.boxSizing = 'content-box';
	document.body.appendChild(placeholder);
}

export function clearPlaceholderElement(type: PlaceholderType): void {
  	document.querySelector(`.spacing-js-${type}-placeholder`)?.remove();
}
