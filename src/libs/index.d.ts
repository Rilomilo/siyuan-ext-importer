/*
 * Copyright (c) 2024 by frostime. All Rights Reserved.
 * @Author       : frostime
 * @Date         : 2024-04-19 18:30:12
 * @FilePath     : /src/libs/index.d.ts
 * @LastEditTime : 2024-04-30 15:53:15
 * @Description  : 
 */
type TSettingItemType = "checkbox" | "select" | "textinput" | "textarea" | "number" | "slider" | "button" | "hint";

interface ISettingItemCore {
    type: TSettingItemType;
    key: string;
    value: any;
    placeholder?: string;
    slider?: {
        min: number;
        max: number;
        step: number;
    };
    options?: { [key: string | number]: string };
    button?: {
        label: string;
        callback: () => void;
    }
}

interface ISettingItem extends ISettingItemCore {
    title: string;
    description: string;
}


//Interface for setting-utils
interface ISettingUtilsItem extends ISettingItem {
    direction?: "row" | "column";
    action?: {
        callback: () => void;
    }
    createElement?: (currentVal: any) => HTMLElement;
}
