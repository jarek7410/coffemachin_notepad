
import I18n from 'react-native-i18n';
import en from "./en";
import pl from "./pl";


I18n.translations = {
    en,
    pl
};
I18n.fallbacks = true;
I18n.languages = "pl";
export default I18n;