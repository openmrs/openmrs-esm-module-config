import { isUuid } from "../validators/validators";

export default {
  concepts: {
    systolicBloodPressureUuid: {
      validators: [isUuid],
      default: "5085AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    },
    diastolicBloodPressureUuid: {
      validators: [isUuid],
      default: "5086AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    },
    pulseUuid: {
      validators: [isUuid],
      default: "5087AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    },
    temperatureUuid: {
      validators: [isUuid],
      default: "5088AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    },
    oxygenationUuid: {
      validators: [isUuid],
      default: "5092AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    },
    heightUuid: {
      validators: [isUuid],
      default: "5092AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    },
    weightUuid: {
      validators: [isUuid],
      default: "5089AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    }
  }
};

export type CommonConfig = {
  concepts: {
    systolicBloodPressureUuid: string;
    diastolicBloodPressureUuid: string;
    pulseUuid: string;
    temperatureUuid: string;
    oxygenationUuid: string;
    heightUuid: string;
    weightUuid: string;
  };
};
