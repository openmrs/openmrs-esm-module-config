export function validator(
  validationFunction: ValidatorFunction,
  message: String
): Validator {
  return (keyPath, value) => {
    if (!validationFunction(value)) {
      throw Error(
        `Invalid configuration value ${value} for ${keyPath}: ${message}`
      );
    }
  };
}

type ValidatorFunction = (value: any) => boolean;
type Validator = (keyPath: String, value: any) => void;
