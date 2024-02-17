// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pgAR3D4uAdvnkKcV9w1BHJ
// Component: bLP0PzDW5lxJ
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Header from "../../Header"; // plasmic-import: yKZqICPhTSwa/component
import Section from "../../Section"; // plasmic-import: NsM6vKP3yYQq/component
import Bullet from "../../Bullet"; // plasmic-import: bEdJB-QHN3Nz/component
import Button from "../../Button"; // plasmic-import: tgtNFqUlQdMk/component
import HomeCta from "../../HomeCta"; // plasmic-import: YlTaNldxuP2l/component
import Footer from "../../Footer"; // plasmic-import: Kbpd9C9jD6Eq/component
import { useScreenVariants as useScreenVariantsro01UftylU04 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: RO01UftylU04/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: pgAR3D4uAdvnkKcV9w1BHJ/projectcss
import sty from "./PlasmicFeatures.module.css"; // plasmic-import: bLP0PzDW5lxJ/css
import simpleProjectKx9VuZaWu62 from "./images/simpleProject.png"; // plasmic-import: Kx9VUZaWU-62/picture

createPlasmicElementProxy;

export const PlasmicFeatures__VariantProps = new Array();

export const PlasmicFeatures__ArgProps = new Array();

const $$ = {};

function PlasmicFeatures__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsro01UftylU04()
  });
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_library_plasmic_color_type_css.plasmic_tokens,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <Section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames("__wab_instance", sty.section)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
            }
            title={"The ultimate in feature set."}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__siHe)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns__ltUO)}
              >
                <div className={classNames(projectcss.all, sty.column___5BG8I)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__gxAQk)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__iceno
                      )}
                    >
                      {"Powerful suite of tools"}
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__sFnnm
                      )}
                    >
                      {
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                      }
                    </div>
                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__bonTs
                      )}
                    />

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__bax7L
                      )}
                    />

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__wS5Zj
                      )}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___1FoNl
                      )}
                    >
                      {
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                      }
                    </div>
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__sq9Ev)}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button___1MZi9
                        )}
                        color={"blue"}
                        submitsForm={true}
                      >
                        {"Start free trial"}
                      </Button>
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__oq0D
                        )}
                        color={"outlineBlue"}
                        submitsForm={true}
                      >
                        {"View demo"}
                      </Button>
                    </Stack__>
                  </Stack__>
                </div>
                <div className={classNames(projectcss.all, sty.column__wbdD)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__lm7H3)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    src={{
                      src: simpleProjectKx9VuZaWu62,
                      fullWidth: 1000,
                      fullHeight: 924,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns___4D7K9)}
              >
                <div className={classNames(projectcss.all, sty.column__u4IqE)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__biluy)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    src={{
                      src: simpleProjectKx9VuZaWu62,
                      fullWidth: 1000,
                      fullHeight: 924,
                      aspectRatio: undefined
                    }}
                  />
                </div>
                <div className={classNames(projectcss.all, sty.column__doyrM)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__ituAr)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__x5696
                      )}
                    >
                      {"Powerful suite of tools"}
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__gtgS3
                      )}
                    >
                      {
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                      }
                    </div>
                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__yYaNb
                      )}
                    />

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__ajGb6
                      )}
                    />

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet___7LSvt
                      )}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__dq8D2
                      )}
                    >
                      {
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                      }
                    </div>
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__algow)}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__gdCHc
                        )}
                        color={"blue"}
                        submitsForm={true}
                      >
                        {"Start free trial"}
                      </Button>
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__bCqQg
                        )}
                        color={"outlineBlue"}
                        submitsForm={true}
                      >
                        {"View demo"}
                      </Button>
                    </Stack__>
                  </Stack__>
                </div>
              </Stack__>
            </Stack__>
          </Section>
          <HomeCta
            data-plasmic-name={"homeCta"}
            data-plasmic-override={overrides.homeCta}
            className={classNames("__wab_instance", sty.homeCta)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "header", "section", "homeCta", "footer"],
  header: ["header"],
  section: ["section"],
  homeCta: ["homeCta"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicFeatures__ArgProps,
          internalVariantPropNames: PlasmicFeatures__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFeatures__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFeatures";
  } else {
    func.displayName = `PlasmicFeatures.${nodeName}`;
  }
  return func;
}

export const PlasmicFeatures = Object.assign(
  // Top-level PlasmicFeatures renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    section: makeNodeComponent("section"),
    homeCta: makeNodeComponent("homeCta"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicFeatures
    internalVariantProps: PlasmicFeatures__VariantProps,
    internalArgProps: PlasmicFeatures__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicFeatures;
/* prettier-ignore-end */