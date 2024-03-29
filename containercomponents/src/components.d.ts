/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface HStack {
    }
    interface VStack {
    }
}
declare global {
    interface HTMLHStackElement extends Components.HStack, HTMLStencilElement {
    }
    var HTMLHStackElement: {
        prototype: HTMLHStackElement;
        new (): HTMLHStackElement;
    };
    interface HTMLVStackElement extends Components.VStack, HTMLStencilElement {
    }
    var HTMLVStackElement: {
        prototype: HTMLVStackElement;
        new (): HTMLVStackElement;
    };
    interface HTMLElementTagNameMap {
        "h-stack": HTMLHStackElement;
        "v-stack": HTMLVStackElement;
    }
}
declare namespace LocalJSX {
    interface HStack {
    }
    interface VStack {
    }
    interface IntrinsicElements {
        "h-stack": HStack;
        "v-stack": VStack;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "h-stack": LocalJSX.HStack & JSXBase.HTMLAttributes<HTMLHStackElement>;
            "v-stack": LocalJSX.VStack & JSXBase.HTMLAttributes<HTMLVStackElement>;
        }
    }
}
