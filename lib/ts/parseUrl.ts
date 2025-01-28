import { Platform } from "react-native";
import { URL as polyFilledUrl } from "react-native-url-polyfill";

export function parseUrl(input: string) {
    if (Platform.OS !== "web") {
        // @ts-ignore (Typescript complains that URL does not expect a parameter in constructor even though it does for react-native-url-polyfill)
        return new polyFilledUrl(input);
    }
    return new URL(input);
}
