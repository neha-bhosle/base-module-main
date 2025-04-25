import { isDaylightSavingTime } from "src/utils/date-utils";

const ENV = import.meta.env.VITE_ENV;

export const getTimeZoneValue = (key: string) => {
  switch (key) {
    case "PST":
      return "America/Los_Angeles";
    case "CST":
      return "America/Chicago";
    case "IST":
      return "Asia/Kolkata";
    case "AST":
      return "America/Halifax";
    case "EST":
      return "America/New_York";
    case "MST":
      return "America/Phoenix";
    case "HST":
      return "Pacific/Honolulu";
    case "PDT":
      return "America/Los_Angeles";
    case "CDT":
      return "America/Chicago";
    case "EDT":
      return "America/New_York";
    case "ADT":
      return "America/Halifax";
    case "MDT":
      return "America/Denver";
    case "NDT":
      return "America/St_Johns";
    case "VET":
      return "America/Caracas";
    case "AKDT":
      return "America/Anchorage";
    case "AKST":
      return "America/Anchorage";
    default:
      return key;
  }
};

export const getDayLightTimeZoneValue = (key: string) => {
  switch (key) {
    case "PST":
      return isDaylightSavingTime("America/Los_Angeles") ? "PDT" : "PST";
    case "CST":
      return isDaylightSavingTime("America/Chicago") ? "CDT" : "CST";
    case "IST":
      return "IST";
    case "AST":
      return isDaylightSavingTime("America/Halifax") ? "ADT" : "AST";
    case "EST":
      return isDaylightSavingTime("America/New_York") ? "EDT" : "EST";
    case "MST":
      return "MST";
    case "MDT":
      return "MDT";
    case "AKST":
      return isDaylightSavingTime("America/Anchorage") ? "AKDT" : "AKST";
    case "HST":
      return "HST";
    default:
      return key;
  }
};

export const getTimeZoneFullName = (key: string) => {
  switch (key) {
    case "PST":
    case "PDT":
      return isDaylightSavingTime("America/Los_Angeles")
        ? "Pacific Daylight Time (GMT -7:00)"
        : "Pacific Standard Time (GMT -8:00)";
    case "CST":
    case "CDT":
      return isDaylightSavingTime("America/Chicago")
        ? "Central Daylight Time (GMT -5:00)"
        : "Central Standard Time (GMT -6:00)";
    case "MST":
    case "MDT":
      return isDaylightSavingTime("America/Denver")
        ? "Mountain Daylight Time (GMT -6:00)"
        : "Mountain Standard Time (GMT -7:00)";
    case "IST":
      return "Indian Standard Time (GMT +5:30)";
    case "AST":
    case "ADT":
      return isDaylightSavingTime("America/Halifax")
        ? "Atlantic Daylight Time (GMT -3:00)"
        : "Atlantic Standard Time (GMT -4:00)";
    case "EST":
    case "EDT":
      return isDaylightSavingTime("America/New_York")
        ? "Eastern Daylight Time (GMT -4:00)"
        : "Eastern Standard Time (GMT -5:00)";
    case "AKDT":
    case "AKST":
      return isDaylightSavingTime("America/Anchorage")
        ? "Alaska Daylight Time (GMT -8:00)"
        : "Alaska Standard Time (GMT -9:00)";
    case "HST":
      return "Hawaii Standard Time (GMT -10:00)";
    default:
      return key;
  }
};

export const timeZoneType = [
  {
    key: isDaylightSavingTime("America/New_York") ? "EDT" : "EST",
    value: isDaylightSavingTime("America/New_York")
      ? "Eastern Daylight Time (GMT -4:00)"
      : "Eastern Standard Time (GMT -5:00)"
  },
  {
    key: "MST",
    value: "Mountain Standard Time (GMT -7:00)"
  },
  { key: "HST", value: "Hawaii Standard Time (GMT -10:00)" },
  {
    key: isDaylightSavingTime("America/Los_Angeles") ? "PDT" : "PST",
    value: isDaylightSavingTime("America/Los_Angeles")
      ? "Pacific Daylight Time (GMT -7:00)"
      : "Pacific Standard Time (GMT -8:00)"
  },
  {
    key: isDaylightSavingTime("America/Chicago") ? "CDT" : "CST",
    value: isDaylightSavingTime("America/Chicago")
      ? "Central Daylight Time (GMT -5:00)"
      : "Central Standard Time (GMT -6:00)"
  },
  {
    key: isDaylightSavingTime("America/Halifax") ? "ADT" : "AST",
    value: isDaylightSavingTime("America/Halifax")
      ? "Atlantic Daylight Time (GMT -3:00)"
      : "Atlantic Standard Time (GMT -4:00)"
  },
  {
    key: isDaylightSavingTime("America/Anchorage") ? "AKDT" : "AKST",
    value: isDaylightSavingTime("America/Anchorage")
      ? "Alaska Daylight Time (GMT -8:00)"
      : "Alaska Standard Time (GMT -9:00)"
  }
];

export const dynamicTimeZone = !isDaylightSavingTime("America/Denver")
  ? [
      ...timeZoneType,
      ...(ENV !== "PROD" ? [{ key: "IST", value: "Indian Standard Time (GMT +5:30)" }] : [])
    ]
  : [
      ...timeZoneType,
      {
        key: "MDT",
        value: "Mountain Daylight Time (GMT -6:00)"
      },
      ...(ENV !== "PROD" ? [{ key: "IST", value: "Indian Standard Time (GMT +5:30)" }] : [])
    ];

export const getTimeZoneFullNameAll = (key: string) => {
  switch (key) {
    case "PST":
      return "Pacific Standard Time (GMT -8:00)";
    case "PDT":
      return "Pacific Daylight Time (GMT -7:00)";

    case "CST":
      return "Central Standard Time (GMT -6:00)";
    case "CDT":
      return "Central Daylight Time (GMT -5:00)";

    case "MST":
      return "Mountain Standard Time (GMT -7:00)";
    case "MDT":
      return "Mountain Daylight Time (GMT -6:00)";

    case "IST":
      return "Indian Standard Time (GMT +5:30)";
    case "AST":
      return "Atlantic Standard Time (GMT -4:00)";
    case "ADT":
      return "Atlantic Daylight Time (GMT -3:00)";
    case "EST":
      return "Eastern Standard Time (GMT -5:00)";
    case "EDT":
      return "Eastern Daylight Time (GMT -4:00)";
    case "AKDT":
      return "Alaska Daylight Time (GMT -8:00)";
    case "AKST":
      return "Alaska Standard Time (GMT -9:00)";
    case "HST":
      return "Hawaii Standard Time (GMT -10:00)";
    default:
      return key;
  }
};
