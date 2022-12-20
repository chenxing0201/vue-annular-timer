import { PropType } from "vue";
interface Threshold {
    color: string;
    threshold: number;
}
declare const __default__: import("vue").DefineComponent<{
    defaultColor: {
        type: StringConstructor;
        default: string;
    };
    textSize: {
        type: StringConstructor;
        default: string;
    };
    endTime: {
        type: NumberConstructor;
        default: number;
    };
    startTime: NumberConstructor;
    step: {
        type: NumberConstructor;
        default: number;
    };
    onFinished: FunctionConstructor;
    thresholds: {
        type: PropType<Threshold>;
        default: never[];
    };
}, unknown, {
    time: number | undefined;
    timer: number;
    timeLimit: number;
    currentTextColor: import("vue").Ref<string>;
    currentTextSize: import("vue").Ref<string>;
    currentRadius: import("vue").Ref<Function>;
}, {
    pathColor(): string;
    strokeDashArray(): string;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    defaultColor: {
        type: StringConstructor;
        default: string;
    };
    textSize: {
        type: StringConstructor;
        default: string;
    };
    endTime: {
        type: NumberConstructor;
        default: number;
    };
    startTime: NumberConstructor;
    step: {
        type: NumberConstructor;
        default: number;
    };
    onFinished: FunctionConstructor;
    thresholds: {
        type: PropType<Threshold>;
        default: never[];
    };
}>>, {
    defaultColor: string;
    textSize: string;
    endTime: number;
    step: number;
    thresholds: Threshold;
}>;
export default __default__;
