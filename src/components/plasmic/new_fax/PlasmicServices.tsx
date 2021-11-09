// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qnuJmRp9X9KCWes45xmZh2
// Component: QpZuWDvTLeu6
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
import Navbar from "../../Navbar"; // plasmic-import: K9STCd6zWahe/component
import ValueProp from "../../ValueProp"; // plasmic-import: FkLAlzOX-ELp/component
import PriceCard from "../../PriceCard"; // plasmic-import: -aHqX6RCPqtz/component
import FooterSection from "../../FooterSection"; // plasmic-import: UvYh689WJEPi/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: gDcK0AoIH9KY/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_new_fax.module.css"; // plasmic-import: qnuJmRp9X9KCWes45xmZh2/projectcss
import * as sty from "./PlasmicServices.module.css"; // plasmic-import: QpZuWDvTLeu6/css

import HammerIcon from "./icons/PlasmicIcon__Hammer"; // plasmic-import: Fn0RWsOQm-AE/icon
import TargetIcon from "./icons/PlasmicIcon__Target"; // plasmic-import: WXbNb4HIFkU0/icon
import FastIcon from "./icons/PlasmicIcon__Fast"; // plasmic-import: pjCNM7QtSlFi/icon
import StrongIcon from "./icons/PlasmicIcon__Strong"; // plasmic-import: 3Wb9Brjq5H6f/icon
import CheckIcon from "./icons/PlasmicIcon__Check"; // plasmic-import: 1XAfv-RwLOpL/icon
import chartO2XrWrxBZqv4 from "./images/chart.png"; // plasmic-import: O2XrWrxBZqv4/picture
import sparkle5KjRisMqcIw from "./images/sparkle.png"; // plasmic-import: 5KjRIS-MqcIw/picture
import medalNhlYms4M9Q4L from "./images/medal.png"; // plasmic-import: NHLYms4m9Q4L/picture
import trophyOgI6K6SkJye from "./images/trophy.png"; // plasmic-import: og_i6K6SkJye/picture

export type PlasmicServices__VariantMembers = {};

export type PlasmicServices__VariantsArgs = {};
type VariantPropType = keyof PlasmicServices__VariantsArgs;
export const PlasmicServices__VariantProps = new Array<VariantPropType>();

export type PlasmicServices__ArgsType = {};
type ArgPropType = keyof PlasmicServices__ArgsType;
export const PlasmicServices__ArgProps = new Array<ArgPropType>();

export type PlasmicServices__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  foreground?: p.Flex<"div">;
  foreground2?: p.Flex<"div">;
  section?: p.Flex<"section">;
  foreground3?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  columns?: p.Flex<"div">;
  footerSection?: p.Flex<typeof FooterSection>;
};

export interface DefaultServicesProps {
  className?: string;
}

function PlasmicServices__RenderFunc(props: {
  variants: PlasmicServices__VariantsArgs;
  args: PlasmicServices__ArgsType;
  overrides: PlasmicServices__OverridesType;
  dataFetches?: PlasmicServices__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      {}
      {}

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox__iT1F0)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground"}
              data-plasmic-override={overrides.foreground}
              hasGap={true}
              className={classNames(defaultcss.all, sty.foreground)}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text__oDmS4
                )}
              >
                {"Our services"}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text__gr2Jd
                )}
              >
                {
                  "A euismod eros a hendrerit tristique suscipit sit aptent dolor adipiscing inceptos cras ullamcorper a vivamus parturient."
                }
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground2"}
              data-plasmic-override={overrides.foreground2}
              hasGap={true}
              className={classNames(defaultcss.all, sty.foreground2)}
            >
              <ValueProp
                card={"card" as const}
                className={classNames("__wab_instance", sty.valueProp___8FWw)}
                description={
                  "Quis iaculis tempor a condimentum per eu montes quis inceptos mi et dis suspendisse integer dui. Orci ad pharetra a vestibulum parturient mauris ac nisl cursus at a vestibulum morbi conubia suspendisse massa vestibulum a varius."
                }
                icon={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__ptf6X)}
                    displayHeight={"56px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"56px" as const}
                    src={{
                      src: chartO2XrWrxBZqv4,
                      fullWidth: 144,
                      fullHeight: 144,
                      aspectRatio: undefined
                    }}
                  />
                }
                title={"Accomplish more"}
              />

              <ValueProp
                card={"card" as const}
                className={classNames("__wab_instance", sty.valueProp__ucIvA)}
                description={
                  "Ut interdum consectetur a interdum parturient blandit vestibulum vel quisque quis lorem libero imperdiet a sed massa quisque rhoncus sed cum quisque morbi."
                }
                icon={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___5EWbE)}
                    displayHeight={"56px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"56px" as const}
                    src={{
                      src: sparkle5KjRisMqcIw,
                      fullWidth: 144,
                      fullHeight: 144,
                      aspectRatio: undefined
                    }}
                  />
                }
                title={"Best-in-class"}
              />

              <ValueProp
                card={"card" as const}
                className={classNames("__wab_instance", sty.valueProp__cu7Xj)}
                description={
                  "Ullamcorper adipiscing adipiscing euismod odio nascetur eu magnis pretium arcu fermentum a eget cubilia tempor. Eu cubilia sodales vestibulum massa non ipsum consectetur lorem nibh parturient parturient vestibulum cum cras penatibus donec dui sit sed eleifend conubia condimentum parturient rutrum."
                }
                icon={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__ohiKe)}
                    displayHeight={"56px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"56px" as const}
                    src={{
                      src: medalNhlYms4M9Q4L,
                      fullWidth: 144,
                      fullHeight: 144,
                      aspectRatio: undefined
                    }}
                  />
                }
                title={"Championship award-winners"}
              />

              <ValueProp
                card={"card" as const}
                className={classNames("__wab_instance", sty.valueProp___8HqLd)}
                description={
                  "Est parturient imperdiet proin inceptos parturient dignissim risus auctor cubilia cum iaculis eu feugiat justo eu vel at non nisl laoreet ligula porttitor a nunc ac cum habitant urna."
                }
                icon={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__hqFth)}
                    displayHeight={"56px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"56px" as const}
                    src={{
                      src: trophyOgI6K6SkJye,
                      fullWidth: 144,
                      fullHeight: 144,
                      aspectRatio: undefined
                    }}
                  />
                }
                title={"Destined for greatness"}
              />
            </p.Stack>
          </p.Stack>

          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(defaultcss.all, sty.section)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground3"}
              data-plasmic-override={overrides.foreground3}
              hasGap={true}
              className={classNames(defaultcss.all, sty.foreground3)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__etEkE)}
              >
                <div className={classNames(defaultcss.all, sty.freeBox__b9Kv9)}>
                  <h2
                    data-plasmic-name={"h2"}
                    data-plasmic-override={overrides.h2}
                    className={classNames(
                      defaultcss.h2,
                      defaultcss.__wab_text,
                      sty.h2
                    )}
                  >
                    {"Next-level"}
                  </h2>
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__vovwk
                  )}
                >
                  {"Dui urna enim a tempus commodo adipiscing ullamcorper."}
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox___7Qa4M)}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"columns"}
                  data-plasmic-override={overrides.columns}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.columns)}
                >
                  <div
                    className={classNames(defaultcss.all, sty.column__q6GDt)}
                  >
                    <ValueProp
                      className={classNames(
                        "__wab_instance",
                        sty.valueProp__zPoE
                      )}
                      darkBackground={"darkBackground" as const}
                      description={
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.text__oZSgQ
                          )}
                        >
                          {
                            "Nulla odio mauris enim parturient adipiscing vestibulum inceptos."
                          }
                        </div>
                      }
                      icon={
                        <HammerIcon
                          className={classNames(
                            defaultcss.all,
                            sty.svg___9S5EV
                          )}
                          role={"img"}
                        />
                      }
                      title={"Harder"}
                      vertical={"vertical" as const}
                    />
                  </div>

                  <div
                    className={classNames(defaultcss.all, sty.column___7Jkv0)}
                  >
                    <ValueProp
                      className={classNames(
                        "__wab_instance",
                        sty.valueProp__ga7Mm
                      )}
                      darkBackground={"darkBackground" as const}
                      description={
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.text__hHccs
                          )}
                        >
                          {
                            "Consequat scelerisque a eros taciti nisl a sodales."
                          }
                        </div>
                      }
                      icon={
                        <TargetIcon
                          className={classNames(defaultcss.all, sty.svg__nor8)}
                          role={"img"}
                        />
                      }
                      title={"Better"}
                      vertical={"vertical" as const}
                    />
                  </div>

                  <div
                    className={classNames(defaultcss.all, sty.column__cnZlz)}
                  >
                    <ValueProp
                      className={classNames(
                        "__wab_instance",
                        sty.valueProp__qplGj
                      )}
                      darkBackground={"darkBackground" as const}
                      description={
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.text__jOlPo
                          )}
                        >
                          {
                            "Varius ad malesuada ullamcorper cursus scelerisque a a."
                          }
                        </div>
                      }
                      icon={
                        <FastIcon
                          className={classNames(defaultcss.all, sty.svg__p35Mi)}
                          role={"img"}
                        />
                      }
                      title={"Faster"}
                      vertical={"vertical" as const}
                    />
                  </div>

                  <div
                    className={classNames(defaultcss.all, sty.column__ewvPf)}
                  >
                    <ValueProp
                      className={classNames(
                        "__wab_instance",
                        sty.valueProp___8Ztw4
                      )}
                      darkBackground={"darkBackground" as const}
                      description={
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.text__qucuI
                          )}
                        >
                          {
                            "Ut eu nam nostra taciti congue adipiscing curabitur."
                          }
                        </div>
                      }
                      icon={
                        <StrongIcon
                          className={classNames(defaultcss.all, sty.svg__ttvpb)}
                          role={"img"}
                        />
                      }
                      title={"Stronger"}
                      vertical={"vertical" as const}
                    />
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>
          </section>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox__dQfDq)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox__pxIng)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox___3Flrs)}
              >
                <div className={classNames(defaultcss.all, sty.freeBox__yWOrq)}>
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__i1K8
                    )}
                  >
                    {"Pricing plans"}
                  </div>
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__abk1Z
                  )}
                >
                  {
                    "Nascetur nascetur ridiculus scelerisque adipiscing a nascetur varius sed eu a ad semper a est nec litora ante at orci rhoncus a varius auctor aliquam inceptos vestibulum ridiculus."
                  }
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__kwbO8)}
              >
                <PriceCard
                  className={classNames("__wab_instance", sty.priceCard__mubrr)}
                  description={
                    <React.Fragment>
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__ypJyO
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={"flatIcon" as const}
                        icon={
                          <CheckIcon
                            className={classNames(
                              defaultcss.all,
                              sty.svg__fo5Gz
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={"noTitle" as const}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__mEAhN
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={"flatIcon" as const}
                        icon={
                          <CheckIcon
                            className={classNames(
                              defaultcss.all,
                              sty.svg___0QiOh
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={"noTitle" as const}
                      />
                    </React.Fragment>
                  }
                  dollars={"0"}
                />

                <PriceCard
                  action={
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text___1Eh69
                      )}
                    >
                      {"Buy Pro"}
                    </div>
                  }
                  className={classNames("__wab_instance", sty.priceCard__u5Ok2)}
                  description={
                    <React.Fragment>
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__kgtH0
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={"flatIcon" as const}
                        icon={
                          <CheckIcon
                            className={classNames(
                              defaultcss.all,
                              sty.svg__g1Ot
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={"noTitle" as const}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__wDjsg
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={"flatIcon" as const}
                        icon={
                          <CheckIcon
                            className={classNames(
                              defaultcss.all,
                              sty.svg__mrtK
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={"noTitle" as const}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__cIa7U
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={"flatIcon" as const}
                        icon={
                          <CheckIcon
                            className={classNames(
                              defaultcss.all,
                              sty.svg__qN5Fs
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={"noTitle" as const}
                      />
                    </React.Fragment>
                  }
                  dollars={"8"}
                  label={
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text__n9Cth
                      )}
                    >
                      {"Pro"}
                    </div>
                  }
                />

                <PriceCard
                  action={
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text___9DMe5
                      )}
                    >
                      {"Buy Team"}
                    </div>
                  }
                  className={classNames("__wab_instance", sty.priceCard__q6X52)}
                  description={
                    <React.Fragment>
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp___2CnaN
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={"flatIcon" as const}
                        icon={
                          <CheckIcon
                            className={classNames(
                              defaultcss.all,
                              sty.svg__w7Kva
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={"noTitle" as const}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp___3XcvH
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={"flatIcon" as const}
                        icon={
                          <CheckIcon
                            className={classNames(
                              defaultcss.all,
                              sty.svg__l2I1I
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={"noTitle" as const}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp___7Kibx
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={"flatIcon" as const}
                        icon={
                          <CheckIcon
                            className={classNames(
                              defaultcss.all,
                              sty.svg__wV7Q6
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={"noTitle" as const}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__fRbnb
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={"flatIcon" as const}
                        icon={
                          <CheckIcon
                            className={classNames(
                              defaultcss.all,
                              sty.svg__jJqZp
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={"noTitle" as const}
                      />
                    </React.Fragment>
                  }
                  dollars={"16"}
                  label={
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text__ut4HC
                      )}
                    >
                      {"Team"}
                    </div>
                  }
                />

                <PriceCard
                  action={
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text___8FHzq
                      )}
                    >
                      {"Contact us"}
                    </div>
                  }
                  className={classNames("__wab_instance", sty.priceCard__yRa1A)}
                  description={
                    <React.Fragment>
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__gLfLp
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={"flatIcon" as const}
                        icon={
                          <CheckIcon
                            className={classNames(
                              defaultcss.all,
                              sty.svg__rlsDp
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={"noTitle" as const}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__n9U6
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={"flatIcon" as const}
                        icon={
                          <CheckIcon
                            className={classNames(
                              defaultcss.all,
                              sty.svg__ugy2K
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={"noTitle" as const}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__yuh1I
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={"flatIcon" as const}
                        icon={
                          <CheckIcon
                            className={classNames(
                              defaultcss.all,
                              sty.svg___80T34
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={"noTitle" as const}
                      />

                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__og1Bi
                        )}
                        description={"Nulla odio mauris."}
                        flatIcon={"flatIcon" as const}
                        icon={
                          <CheckIcon
                            className={classNames(
                              defaultcss.all,
                              sty.svg__gllNp
                            )}
                            role={"img"}
                          />
                        }
                        noTitle={"noTitle" as const}
                      />
                    </React.Fragment>
                  }
                  dollars={"?"}
                  label={
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text__quMKm
                      )}
                    >
                      {"Enterprise"}
                    </div>
                  }
                  primary={"primary" as const}
                />
              </p.Stack>
            </p.Stack>
          </p.Stack>

          <FooterSection
            data-plasmic-name={"footerSection"}
            data-plasmic-override={overrides.footerSection}
            className={classNames("__wab_instance", sty.footerSection)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "foreground",
    "foreground2",
    "section",
    "foreground3",
    "h2",
    "columns",
    "footerSection"
  ],
  navbar: ["navbar"],
  foreground: ["foreground"],
  foreground2: ["foreground2"],
  section: ["section", "foreground3", "h2", "columns"],
  foreground3: ["foreground3", "h2", "columns"],
  h2: ["h2"],
  columns: ["columns"],
  footerSection: ["footerSection"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  foreground: "div";
  foreground2: "div";
  section: "section";
  foreground3: "div";
  h2: "h2";
  columns: "div";
  footerSection: typeof FooterSection;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicServices__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicServices__VariantsArgs;
    args?: PlasmicServices__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicServices__Fetches;
  } & Omit<PlasmicServices__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicServices__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicServices__ArgProps,
      internalVariantPropNames: PlasmicServices__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicServices__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicServices";
  } else {
    func.displayName = `PlasmicServices.${nodeName}`;
  }
  return func;
}

export const PlasmicServices = Object.assign(
  // Top-level PlasmicServices renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    foreground: makeNodeComponent("foreground"),
    foreground2: makeNodeComponent("foreground2"),
    section: makeNodeComponent("section"),
    foreground3: makeNodeComponent("foreground3"),
    h2: makeNodeComponent("h2"),
    columns: makeNodeComponent("columns"),
    footerSection: makeNodeComponent("footerSection"),

    // Metadata about props expected for PlasmicServices
    internalVariantProps: PlasmicServices__VariantProps,
    internalArgProps: PlasmicServices__ArgProps
  }
);

export default PlasmicServices;
/* prettier-ignore-end */