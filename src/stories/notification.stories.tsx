import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select, boolean } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { Notification } from "../Notification/notification";

const stories = storiesOf("Notification", module).addDecorator(withInfo());

stories.add("default", () => (
  <Notification
    text={text("Text", "Notification text")}
    theme={select(
      "Theme",
      ["primary", "success", "error", "alert", "dark"],
      "primary"
    )}
    icon={
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="white"
        viewBox="0 0 24 24"
      >
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.507 13.941c-1.512 1.195-3.174 1.931-5.506 1.931-2.334 0-3.996-.736-5.508-1.931l-.493.493c1.127 1.72 3.2 3.566 6.001 3.566 2.8 0 4.872-1.846 5.999-3.566l-.493-.493zm-9.007-5.941c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z" />
      </svg>
    }
  />
));
