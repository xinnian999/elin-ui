import { App } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { toast as EMessage } from 'vue3-toastify';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';

declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_2<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_3<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_4<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_5<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_6<T> = T extends undefined ? never : T;

declare type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_Prettify_2<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_Prettify_3<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_Prettify_4<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_Prettify_5<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_2<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_2<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_3<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_3<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_4<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_4<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_5<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_5<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_6<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_6<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_2<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify_2<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_3<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify_3<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_4<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify_4<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_5<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify_5<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_10<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_2<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_3<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_4<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_5<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_6<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_7<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_8<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_9<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: (app: App<Element>) => void;
export default _default;

export declare type Direction = 'vertical' | 'horizontal';

export declare const EButton: __VLS_WithTemplateSlots<DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
type?: "default" | "info" | "success" | "warning" | "primary" | "danger" | undefined;
plain?: boolean | undefined;
circle?: boolean | undefined;
round?: boolean | undefined;
disabled?: boolean | undefined;
text?: boolean | undefined;
size?: "default" | "small" | "large" | "tiny" | undefined;
loading?: boolean | undefined;
clickEffect?: "water" | "zoom" | undefined;
}>, {
size: string;
type: string;
clickEffect: string;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
click: (e: Event) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
type?: "default" | "info" | "success" | "warning" | "primary" | "danger" | undefined;
plain?: boolean | undefined;
circle?: boolean | undefined;
round?: boolean | undefined;
disabled?: boolean | undefined;
text?: boolean | undefined;
size?: "default" | "small" | "large" | "tiny" | undefined;
loading?: boolean | undefined;
clickEffect?: "water" | "zoom" | undefined;
}>, {
size: string;
type: string;
clickEffect: string;
}>>> & {
onClick?: ((e: Event) => any) | undefined;
}, {
type: "default" | "info" | "success" | "warning" | "primary" | "danger";
size: "default" | "small" | "large" | "tiny";
clickEffect: "water" | "zoom";
}, {}>, {
    default?(_: {}): any;
}>;

export declare const ECard: __VLS_WithTemplateSlots_7<DefineComponent<__VLS_WithDefaults_4<__VLS_TypePropsToRuntimeProps_4<{
header?: string | undefined;
}>, {}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_4<__VLS_TypePropsToRuntimeProps_4<{
header?: string | undefined;
}>, {}>>>, {}, {}>, {
    header?(_: {}): any;
    default?(_: {}): any;
    footer?(_: {}): any;
}>;

export declare const ECheckbox: DefineComponent<    {
modelValue: PropType<any>;
value: {
type: PropType<string | number | boolean>;
};
label: {
type: PropType<string>;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: PropType<any>;
value: {
type: PropType<string | number | boolean>;
};
label: {
type: PropType<string>;
};
}>>, {}, {}>;

export declare const ECheckboxGroup: DefineComponent<    {
modelValue: PropType<any>;
options: {
type: PropType<Options>;
required: true;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: PropType<any>;
options: {
type: PropType<Options>;
required: true;
};
}>>, {}, {}>;

export declare const EColorPicker: DefineComponent<    {
modelValue: PropType<any>;
placeholder: {
type: PropType<string>;
default: string;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: PropType<any>;
placeholder: {
type: PropType<string>;
default: string;
};
}>>, {
placeholder: string;
}, {}>;

export declare const EDialog: __VLS_WithTemplateSlots_3<DefineComponent<    {
modelValue: PropType<boolean>;
title: {
type: PropType<string>;
required: true;
default: string;
};
width: {
type: PropType<number>;
required: true;
default: number;
};
top: {
type: PropType<string>;
required: true;
default: string;
};
showClose: {
type: PropType<boolean>;
required: true;
default: boolean;
};
showMask: {
type: PropType<boolean>;
required: true;
default: boolean;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: PropType<boolean>;
title: {
type: PropType<string>;
required: true;
default: string;
};
width: {
type: PropType<number>;
required: true;
default: number;
};
top: {
type: PropType<string>;
required: true;
default: string;
};
showClose: {
type: PropType<boolean>;
required: true;
default: boolean;
};
showMask: {
type: PropType<boolean>;
required: true;
default: boolean;
};
}>>, {
title: string;
width: number;
top: string;
showClose: boolean;
showMask: boolean;
}, {}>, {
    default?(_: {}): any;
    footer?(_: {}): any;
}>;

export declare const EDropdown: __VLS_WithTemplateSlots_5<DefineComponent<    {
selected: PropType<any>;
visible: PropType<any>;
options: {
type: PropType<Options>;
default: any;
};
multiple: {
type: PropType<boolean>;
};
renderLabel: {
type: PropType<(item: Option_2) => any>;
};
placement: {
type: PropType<"top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end">;
default: string;
};
content: {
type: PropType<string>;
};
trigger: {
type: PropType<"hover" | "click">;
default: string;
};
autoClose: {
type: PropType<boolean>;
default: boolean;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
selected: PropType<any>;
visible: PropType<any>;
options: {
type: PropType<Options>;
default: any;
};
multiple: {
type: PropType<boolean>;
};
renderLabel: {
type: PropType<(item: Option_2) => any>;
};
placement: {
type: PropType<"top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end">;
default: string;
};
content: {
type: PropType<string>;
};
trigger: {
type: PropType<"hover" | "click">;
default: string;
};
autoClose: {
type: PropType<boolean>;
default: boolean;
};
}>>, {
options: Options;
placement: "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end";
trigger: "hover" | "click";
autoClose: boolean;
}, {}>, {
    default?(_: {}): any;
}>;

export declare const EInput: DefineComponent<    {
modelValue: PropType<any>;
placeholder: {
type: PropType<string>;
default: string;
};
disabled: {
type: PropType<boolean>;
};
readonly: {
type: PropType<boolean>;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: PropType<any>;
placeholder: {
type: PropType<string>;
default: string;
};
disabled: {
type: PropType<boolean>;
};
readonly: {
type: PropType<boolean>;
};
}>>, {
placeholder: string;
}, {}>;

export declare const EList: __VLS_WithTemplateSlots_8<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    default?(_: {}): any;
}>;

export declare const EListItem: __VLS_WithTemplateSlots_10<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, {
    default?(_: {}): any;
}>;

export declare const EMenu: DefineComponent<    {
modelValue: PropType<any>;
multiple: {
type: PropType<boolean>;
};
direction: {
type: PropType<Direction>;
default: string;
};
renderLabel: {
type: PropType<(item: Option_2) => any>;
};
items: {
type: PropType<Options>;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
select: (key: string) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: PropType<any>;
multiple: {
type: PropType<boolean>;
};
direction: {
type: PropType<Direction>;
default: string;
};
renderLabel: {
type: PropType<(item: Option_2) => any>;
};
items: {
type: PropType<Options>;
};
}>> & {
onSelect?: ((key: string) => any) | undefined;
}, {
direction: Direction;
}, {}>;

export { EMessage }

export declare const EPopover: __VLS_WithTemplateSlots_4<DefineComponent<__VLS_WithDefaults_3<__VLS_TypePropsToRuntimeProps_3<TooltipProps>, {
placement: string;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_3<__VLS_TypePropsToRuntimeProps_3<TooltipProps>, {
placement: string;
}>>>, {
placement: "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end";
}, {}>, {
    default?(_: {}): any;
    content?(_: {}): any;
}>;

export declare const ESelect: DefineComponent<    {
modelValue: PropType<any>;
options: {
type: PropType<Options>;
default: never[];
};
placeholder: {
type: PropType<string>;
default: string;
};
multiple: {
type: PropType<boolean>;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: PropType<any>;
options: {
type: PropType<Options>;
default: never[];
};
placeholder: {
type: PropType<string>;
default: string;
};
multiple: {
type: PropType<boolean>;
};
}>>, {
options: Options;
placeholder: string;
}, {}>;

export declare const ESpace: __VLS_WithTemplateSlots_2<DefineComponent<__VLS_WithDefaults_2<__VLS_TypePropsToRuntimeProps_2<{
direction: Direction;
wrap: boolean;
}>, {
direction: string;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_2<__VLS_TypePropsToRuntimeProps_2<{
direction: Direction;
wrap: boolean;
}>, {
direction: string;
}>>>, {
direction: Direction;
}, {}>, {
    default?(_: {}): any;
}>;

export declare const ETable: DefineComponent<__VLS_TypePropsToRuntimeProps_6<{
data: {
[key: string]: any;
}[];
columns: tableColumns;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_6<{
data: {
[key: string]: any;
}[];
columns: tableColumns;
}>>>, {}, {}>;

export declare const ETag: __VLS_WithTemplateSlots_9<DefineComponent<__VLS_WithDefaults_5<__VLS_TypePropsToRuntimeProps_5<{
closable?: boolean | undefined;
type: StatusType;
}>, {
type: string;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
close: (e: Event) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_5<__VLS_TypePropsToRuntimeProps_5<{
closable?: boolean | undefined;
type: StatusType;
}>, {
type: string;
}>>> & {
onClose?: ((e: Event) => any) | undefined;
}, {
type: StatusType;
}, {}>, {
    default?(_: {}): any;
}>;

export declare const ETooltip: __VLS_WithTemplateSlots_6<DefineComponent<    {
modelValue: PropType<any>;
placement: {
type: PropType<"top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end">;
default: string;
};
content: {
type: PropType<string>;
};
trigger: {
type: PropType<"hover" | "click">;
default: string;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: PropType<any>;
placement: {
type: PropType<"top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end">;
default: string;
};
content: {
type: PropType<string>;
};
trigger: {
type: PropType<"hover" | "click">;
default: string;
};
}>>, {
placement: "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end";
trigger: "hover" | "click";
}, {}>, {
    default?(_: {}): any;
    content?(_: {}): any;
}>;

export declare const IconChecked: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>;

export declare const IconClose: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>;

export declare const IconDelete: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>;

export declare const IconDropDown: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>;

export declare const IconDropUp: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>;

export declare const IconEdit: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>;

export declare const IconError: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>;

export declare const IconInfo: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>;

export declare const IconLoading: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>;

export declare const IconPlus: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>;

export declare const IconSuccess: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>;

export declare const IconWarning: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>;

declare type Option_2 = {
    label: string;
    value: string;
};
export { Option_2 as Option }

export declare type Options = Option_2[];

export declare type StatusType = 'primary' | 'success' | 'info' | 'warning' | 'danger';

export declare type tableCol = {
    label?: string;
    prop?: string;
    width?: number;
    fixed?: 'left' | 'right';
    formatter?: (data: {
        val: any;
        row: object;
        index: number;
    }) => any;
};

export declare type tableColumns = tableCol[];

export declare interface TooltipProps {
    placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
    content?: string;
    trigger?: 'hover' | 'click';
}

export { }
