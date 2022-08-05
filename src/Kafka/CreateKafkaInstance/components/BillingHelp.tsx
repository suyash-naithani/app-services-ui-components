import { Popover } from "@patternfly/react-core";
import { OutlinedQuestionCircleIcon } from "@patternfly/react-icons";
import type { VoidFunctionComponent } from "react";
import { Trans, useTranslation } from "react-i18next";
import { ExternalLink } from "../../../shared";

export type BillingHelpProps = {
  type: "rh-only" | "external-marketplaces";
  subscriptionOptionsHref: string;
};

export const BillingHelp: VoidFunctionComponent<BillingHelpProps> = ({
  type,
  subscriptionOptionsHref,
}) => {
  const { t } = useTranslation("create-kafka-instance");
  return (
    <Popover
      aria-label={t("billing.field_label")}
      bodyContent={
        <Trans
          i18nKey={
            type === "rh-only"
              ? "billing.field_popover_rh_only"
              : "billing.field_popover_external_marketplace"
          }
          ns={"create-kafka-instance"}
          components={[
            <ExternalLink
              testId={"subscription-options-ext-link"}
              href={subscriptionOptionsHref}
            />,
          ]}
        />
      }
    >
      <OutlinedQuestionCircleIcon />
    </Popover>
  );
};
