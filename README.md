# react-native-floating-title-text-input
### What is this?
This component will render a custom text field with floating title. When there is no value, the placeholder will be centered. Once there is a value, placeholder will be shown on the top of textInput.

### Installation
```npm install react-native-floating-title-text-input --save```

### Usage example

```javascript
import FloatingTitleTextInput from "react-native-floating-title-text-input"

class SomeComponent extends Component {
  render () {
    return (
      <View>
        <FloatingTitleTextInput
          placeholder={"name of field"}
          onChangeText = {(value)=>console.log(value)}
          onFocus={()=>console.log("textInput in focus")}
          onBlur={(value)=>console.log(value)}
          titleStyle = {marginLeft : 8}
          placeholderTextColor = "#00000"
          style = {{marginVertical : 10 , padding :10}}
          keyboardType="numeric"
          secureTextEntry={false}
        />
      </View>
    );
  }
}
```
