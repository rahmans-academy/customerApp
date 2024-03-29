// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pgAR3D4uAdvnkKcV9w1BHJ
// Component: i40N1NiJYt6d
import * as React from "react";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  renderPlasmicSlot,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import BaseCard from "../../BaseCard"; // plasmic-import: AW2BIdMewFYO/component
import Bullet from "../../Bullet"; // plasmic-import: bEdJB-QHN3Nz/component
import Button from "../../Button"; // plasmic-import: tgtNFqUlQdMk/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: pgAR3D4uAdvnkKcV9w1BHJ/projectcss
import sty from "./PlasmicPlan.module.css"; // plasmic-import: i40N1NiJYt6d/css

createPlasmicElementProxy;

export const PlasmicPlan__VariantProps = new Array();

export const PlasmicPlan__ArgProps = new Array(
  "price",
  "name",
  "description",
  "children"
);

const $$ = {};

function PlasmicPlan__RenderFunc(props) {
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
  return (
    <BaseCard
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root)}
    >
      <div className={classNames(projectcss.all, sty.freeBox__ld94Z)}>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__igut1)}
        >
          {renderPlasmicSlot({
            defaultContents: "Basic",
            value: args.name,
            className: classNames(sty.slotTargetName)
          })}
          {renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__yl8C
                )}
              >
                {"$10"}
              </div>
            ),

            value: args.price
          })}
          {renderPlasmicSlot({
            defaultContents: (
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__iExpl)}
              >
                <Bullet
                  className={classNames("__wab_instance", sty.bullet__q14X)}
                />

                <Bullet
                  className={classNames("__wab_instance", sty.bullet__tnpfp)}
                />

                <Bullet
                  className={classNames("__wab_instance", sty.bullet__pXtOo)}
                />
              </Stack__>
            ),

            value: args.description
          })}
          <div className={classNames(projectcss.all, sty.freeBox__qNx6V)}>
            {renderPlasmicSlot({
              defaultContents: (
                <Button
                  className={classNames("__wab_instance", sty.button___9G4Yv)}
                  color={"outlineBlue"}
                  submitsForm={true}
                >
                  {"Get started"}
                </Button>
              ),

              value: args.children
            })}
          </div>
        </Stack__>
      </div>
    </BaseCard>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPlan__ArgProps,
          internalVariantPropNames: PlasmicPlan__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPlan__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPlan";
  } else {
    func.displayName = `PlasmicPlan.${nodeName}`;
  }
  return func;
}

export const PlasmicPlan = Object.assign(
  // Top-level PlasmicPlan renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicPlan
    internalVariantProps: PlasmicPlan__VariantProps,
    internalArgProps: PlasmicPlan__ArgProps
  }
);

export default PlasmicPlan;
/* prettier-ignore-end */
