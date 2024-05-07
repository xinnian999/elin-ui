import { App } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';

declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_2<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_3<T> = T extends undefined ? never : T;

declare type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_Prettify_2<T> = {
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

declare type __VLS_WithTemplateSlots<T, S> = T & {
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

declare const _default: (app: App<Element>) => void;
export default _default;

export declare const EButton: __VLS_WithTemplateSlots<DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
type?: "default" | "primary" | "success" | "info" | "warning" | "danger" | undefined;
plain?: boolean | undefined;
circle?: boolean | undefined;
round?: boolean | undefined;
disabled?: boolean | undefined;
text?: boolean | undefined;
size?: "default" | "large" | "small" | "tiny" | undefined;
loading?: boolean | undefined;
}>, {
size: string;
type: string;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
click: (e: Event) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
type?: "default" | "primary" | "success" | "info" | "warning" | "danger" | undefined;
plain?: boolean | undefined;
circle?: boolean | undefined;
round?: boolean | undefined;
disabled?: boolean | undefined;
text?: boolean | undefined;
size?: "default" | "large" | "small" | "tiny" | undefined;
loading?: boolean | undefined;
}>, {
size: string;
type: string;
}>>> & {
onClick?: ((e: Event) => any) | undefined;
}, {
type: "default" | "primary" | "success" | "info" | "warning" | "danger";
size: "default" | "large" | "small" | "tiny";
}, {}>, {
    default?(_: {}): any;
}>;

export declare const EDialog: __VLS_WithTemplateSlots_3<DefineComponent<    {
modelValue: PropType<boolean>;
title: {
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
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: PropType<boolean>;
title: {
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
}>>, {
title: string;
showClose: boolean;
showMask: boolean;
width: number;
top: string;
}, {}>, {
    default?(_: {}): any;
    footer?(_: {}): any;
}>;

export declare const ESelect: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>;

export declare const ESpace: __VLS_WithTemplateSlots_2<DefineComponent<__VLS_WithDefaults_2<__VLS_TypePropsToRuntimeProps_2<{
direction: string;
}>, {
direction: string;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_2<__VLS_TypePropsToRuntimeProps_2<{
direction: string;
}>, {
direction: string;
}>>>, {
direction: string;
}, {}>, {
    default?(_: {}): any;
}>;

export declare const ETable: DefineComponent<__VLS_TypePropsToRuntimeProps_3<{
data: {
[key: string]: any;
}[];
columns: tableColumns;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_TypePropsToRuntimeProps_3<{
data: {
[key: string]: any;
}[];
columns: tableColumns;
}>>>, {}, {}>;

export declare const IconClose: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>;

export declare const IconDelete: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>;

export declare const IconEdit: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>;

export declare const IconLoading: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>;

export declare const IconPlus: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>;

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

export { }
