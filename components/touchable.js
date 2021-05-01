import { Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class LinkedLink extends Component {
    _openLink = async () => {
        const { link } = this.props;

        if (await LinkedLink.canOpenUrl(link)){
            Linking.openURL(link);
        }
    }
    render(){
        const {children} = this.props;

        return (
            <TouchableOpacity accessibilityRole="link" onPress={this.openLink}>
                {children}
            </TouchableOpacity>
        );
    }
}