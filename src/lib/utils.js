import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { cubicOut } from "svelte/easing";

/**
 * Combines class names and merges Tailwind classes.
 * @param {...any} inputs - The classes to be combined and merged.
 * @returns {string} - The combined class names.
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

/**
 * Parameters for fly and scale animation.
 * @typedef {Object} FlyAndScaleParams
 * @property {number} [y=-8] - Vertical translation.
 * @property {number} [x=0] - Horizontal translation.
 * @property {number} [start=0.95] - Starting scale.
 * @property {number} [duration=150] - Animation duration in ms.
 */

/**
 * Fly and scale transition for an element.
 * @param {Element} node - The DOM node.
 * @param {FlyAndScaleParams} [params={ y: -8, x: 0, start: 0.95, duration: 150 }] - Transition parameters.
 * @returns {import("svelte/transition").TransitionConfig} - Transition configuration.
 */
export function flyAndScale(node, params = { y: -8, x: 0, start: 0.95, duration: 150 }) {
    const style = getComputedStyle(node);
    const transform = style.transform === "none" ? "" : style.transform;

    const scaleConversion = (valueA, scaleA, scaleB) => {
        const [minA, maxA] = scaleA;
        const [minB, maxB] = scaleB;

        const percentage = (valueA - minA) / (maxA - minA);
        return percentage * (maxB - minB) + minB;
    };

    const styleToString = (style) => {
        return Object.keys(style).reduce((str, key) => {
            if (style[key] === undefined) return str;
            return str + `${key}:${style[key]};`;
        }, "");
    };

    return {
        duration: params.duration ?? 200,
        delay: 0,
        css: (t) => {
            const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
            const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
            const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

            return styleToString({
                transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                opacity: t,
            });
        },
        easing: cubicOut,
    };
}
