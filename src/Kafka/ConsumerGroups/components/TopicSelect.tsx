import {
  Select,
  SelectOption,
  SelectProps,
  SelectVariant,
} from "@patternfly/react-core";
import { FunctionComponent, useState } from "react";
import { useTranslation } from "react-i18next";

export type TopicSelectProps = {
  value: string;
  topics: string[];
  onChange: (topic: string) => void;
};

export const TopicSelect: FunctionComponent<TopicSelectProps> = ({
  topics,
  onChange,
  value,
}) => {
  const { t } = useTranslation("kafka");

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onToggle = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  const onSelect: SelectProps["onSelect"] = (_, topic) => {
    onChange(topic as string);
    setIsOpen(false);
  };

  return (
    <Select
      aira-label={t("consumerGroup.reset_offset_topic_label")}
      toggleAriaLabel={t("consumerGroup.reset_offset_topic_label")}
      id={"topic-select"}
      variant={SelectVariant.single}
      onToggle={onToggle}
      onSelect={onSelect}
      isOpen={isOpen}
      selections={value}
      placeholderText={t("common:select")}
      menuAppendTo={"parent"}
      width={"200px"}
    >
      {topics.map((topic) => (
        <SelectOption key={topic}>{topic}</SelectOption>
      ))}
    </Select>
  );
};
