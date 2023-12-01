module.exports = {
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "@root": "<rootDir>/app.ts",
    "@constants": "<rootDir>/app/constants",
    "@controllers": "<rootDir>/app/controllers",
    "@middlewares": "<rootDir>/app/middlewares",
    "@models": "<rootDir>/app/models",
    "@serializers": "<rootDir>/app/serializers",
    "@services": "<rootDir>/app/services",
    "@types": "<rootDir>/app/types",
    "@utils": "<rootDir>/app/utils",
    "@configs": "<rootDir>/configs",
    "@jobs": "<rootDir>/app/jobs",
    "@lib": "<rootDir>/app/lib",
  },
  moduleDirectories: ["node_modules", "<rootDir>"],
};
