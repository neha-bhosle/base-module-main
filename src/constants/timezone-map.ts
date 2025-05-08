export const TimeZoneMap: { [key: string]: string } = {
  EST: "EST",
  MST: "MST",
  HST: "HST",
  PST: "America/Los_Angeles",
  CST: "America/Chicago",
  IST: "Asia/Calcutta",
  AST: "America/Anchorage",
};

export const TimeZoneMapLocalToMoment: { [key: string]: string } = {
  EST: "EST",
  MST: "MST",
  HST: "HST",
  "America/Los_Angeles": "PST",
  "America/Chicago": "CST",
  "Asia/Calcutta": "IST",
  "America/Anchorage": "AST",
};
