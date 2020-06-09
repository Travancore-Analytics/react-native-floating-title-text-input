import React from 'react';
import { StyleSheet, View, TextInput, Text} from 'react-native';

export default class FloatingTitleTextInput extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            topPlaceholder   : false,
            textString       : ""
        }
        this.placeholder = this.props.placeholder ? this.props.placeholder : ""
        this.titleText = this.props.customTitle ? this.props.customTitle : this.placeholder
    }

    renderPlaceHolderText = () =>{
        return(
            <Text style={[styles.placeholder,this.props.titleStyle]} >
                { this.state.topPlaceholder ? this.titleText : "" }
            </Text>
        )
    }

    onChangeText = (value) =>{
        this.setState({textString : value})
        if(this.props.onChangeText){
            this.props.onChangeText(value)
        }
    }

    onFocus = () => {
        this.setState({topPlaceholder:true})
        if(this.props.onFocus){
            this.props.onFocus()
        }
    }

    onBlur = () => {
        if(this.state.textString === ""){
            this.setState({topPlaceholder:false})
        }
        if(this.props.onBlur){
            this.props.onBlur(this.state.textString)
        }
    }

    render(){
        return(
            <View style={this.props.style} >
                {this.renderPlaceHolderText()}
                <TextInput
                    value = {this.props.value ? this.props.value : this.state.textString}
                    keyboardType = {this.props.keyboardType ? this.props.keyboardType : "default" }
                    secureTextEntry = {this.props.secureTextEntry  ? this.props.secureTextEntry : false }
                    onChangeText = {(value)=>{this.onChangeText(value)}}
                    onFocus = {()=>{this.onFocus()}}
                    multiline = {this.props.multiline ? this.props.multiline : false }
                    onBlur  = {()=>{this.onBlur()}}
                    placeholderTextColor = {this.props.placeholderTextColor ? this.props.placeholderTextColor : "#B3B3B3"}
                    placeholder = {!this.state.topPlaceholder ? this.placeholder : ""}
                    style = {[styles.textInput,this.props.textInputStyle]} 
                />
            </View>
        )
    }

}

const styles                    = StyleSheet.create({
    textInput                   : {
        height                  : 44,
        backgroundColor         : "#EEEEEE",
        paddingLeft             : 13
    },
    placeholder                 : {
        color                   : "#B3B3B3",
        marginBottom            : 13
    }
})