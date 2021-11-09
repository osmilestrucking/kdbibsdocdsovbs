// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qnuJmRp9X9KCWes45xmZh2
// Component: _7wJHvvzk_P_
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_new_fax.module.css"; // plasmic-import: qnuJmRp9X9KCWes45xmZh2/projectcss
import * as sty from "./PlasmicTestimonial.module.css"; // plasmic-import: _7wJHvvzk_P_/css

import tracyAuzqNqco85Il from "./images/tracy.png"; // plasmic-import: AuzqNQCO85IL/picture

export type PlasmicTestimonial__VariantMembers = {};

export type PlasmicTestimonial__VariantsArgs = {};
type VariantPropType = keyof PlasmicTestimonial__VariantsArgs;
export const PlasmicTestimonial__VariantProps = new Array<VariantPropType>();

export type PlasmicTestimonial__ArgsType = {
  name?: React.ReactNode;
  title?: React.ReactNode;
  quote?: React.ReactNode;
  image?: string;
};

type ArgPropType = keyof PlasmicTestimonial__ArgsType;
export const PlasmicTestimonial__ArgProps = new Array<ArgPropType>(
  "name",
  "title",
  "quote",
  "image"
);

export type PlasmicTestimonial__OverridesType = {
  root?: p.Flex<"div">;
  authorPicture?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultTestimonialProps {
  name?: React.ReactNode;
  title?: React.ReactNode;
  quote?: React.ReactNode;
  image?: string;
  className?: string;
}

function PlasmicTestimonial__RenderFunc(props: {
  variants: PlasmicTestimonial__VariantsArgs;
  args: PlasmicTestimonial__ArgsType;
  overrides: PlasmicTestimonial__OverridesType;
  dataFetches?: PlasmicTestimonial__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox__pp9ZO)}
      >
        {p.renderPlasmicSlot({
          defaultContents:
            '"A sem a velit consequat a torquent posuere nibh consectetur ac sodales mi vulputate imperdiet suspendisse a adipiscing felis convallis est tristique faucibus condimentum ante viverra."',
          value: args.quote,
          className: classNames(sty.slotTargetQuote)
        })}
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox__boM5L)}
      >
        <p.PlasmicImg
          data-plasmic-name={"authorPicture"}
          data-plasmic-override={overrides.authorPicture}
          alt={""}
          className={classNames(sty.authorPicture)}
          displayHeight={"64px" as const}
          displayMaxHeight={"none" as const}
          displayMaxWidth={"none" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"64px" as const}
          src={
            args.image !== undefined
              ? args.image
              : {
                  src: tracyAuzqNqco85Il,
                  fullWidth: 500,
                  fullHeight: 500,
                  aspectRatio: undefined
                }
          }
        />

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__yIkd)}
        >
          <div className={classNames(defaultcss.all, sty.freeBox__tIm4A)}>
            {p.renderPlasmicSlot({
              defaultContents: "Tracy Jordan",
              value: args.name,
              className: classNames(sty.slotTargetName)
            })}
          </div>

          {p.renderPlasmicSlot({
            defaultContents: "Comedian, TGS",
            value: args.title,
            className: classNames(sty.slotTargetTitle)
          })}
        </p.Stack>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "authorPicture"],
  authorPicture: ["authorPicture"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  authorPicture: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTestimonial__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTestimonial__VariantsArgs;
    args?: PlasmicTestimonial__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicTestimonial__Fetches;
  } & Omit<PlasmicTestimonial__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTestimonial__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTestimonial__ArgProps,
      internalVariantPropNames: PlasmicTestimonial__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicTestimonial__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTestimonial";
  } else {
    func.displayName = `PlasmicTestimonial.${nodeName}`;
  }
  return func;
}

export const PlasmicTestimonial = Object.assign(
  // Top-level PlasmicTestimonial renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    authorPicture: makeNodeComponent("authorPicture"),

    // Metadata about props expected for PlasmicTestimonial
    internalVariantProps: PlasmicTestimonial__VariantProps,
    internalArgProps: PlasmicTestimonial__ArgProps
  }
);

export default PlasmicTestimonial;
/* prettier-ignore-end */