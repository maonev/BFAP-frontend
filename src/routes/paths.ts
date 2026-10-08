export const Paths = {
  HOME: "/",
  TEAMS: "/teams",
  LOGIN: "/login-page",
  MEMBER_DETAIL_ROUTE: "/teams/:name",
  MEMBER_DETAIL: (name: string) => `/teams/${name}`,
} as const;
