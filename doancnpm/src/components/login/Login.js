import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/login';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    };
    changTextUsername = (text) => {
        this.setState({username: text});
    };
    changTextPassword = (text) => {
        this.setState({password: text});
    };
    loginSuccess = () => {
        const data = {email: this.state.email, password: this.state.password};
    }
    render() {
        return (
            <View style={styles.container}>
        {/* <Loader status={this.props.loading} msg={'Signing in '}></Loader> */}
                <View style={styles.inputView}>
                    <TextInput
                        onChangeText={this.changeTextUsername}
                        style={styles.inputText}
                        placeholder="Email..."
                        placeholderTextColor="#003f5c"
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        onChangeText={this.changeTextPass}
                        style={styles.inputText}
                        placeholder="Password..."
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                    />
                </View>

                <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.loginBtn} onPress={this.loginSuccess}>
                        <Text style={styles.loginText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={this.moveToRegisterIter}
                    style={{marginBottom: 10}}>
                    <Text style={styles.loginText}>Signup for Iter</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.moveToRegisterCompany}>
                    <Text style={styles.loginText}>Signup for Company</Text>
                </TouchableOpacity>
            </View>
        )
    };
}

const mapDispatchToProps = {
    login,
};
function mapStateToProps(state) {
    return {
        msg: state.login.msg,
        isLoggedIn: state.login.isLoggedIn,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#003f5c',
      flex: 1,
    },
    forgot: {
      color: 'white',
      fontSize: 13,
    },
    loginBtn: {
      width: '80%',
      backgroundColor: '#fb5b5a',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      marginBottom: 10,
    },
    inputView: {
      width: '80%',
      backgroundColor: '#465881',
      borderRadius: 25,
      height: 50,
      marginBottom: 20,
      justifyContent: 'center',
      padding: 20,
    },
    inputText: {
      height: 60,
      color: 'white',
    },
  
    buttonLogin: {
      height: 50,
      width: 100,
      backgroundColor: '#456745',
      margin: 10,
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    loginText: {},
});
