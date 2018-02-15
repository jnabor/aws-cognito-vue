import Vuex from 'vuex';
import { CognitoUserPool,
         CognitoUserAttribute,
         CognitoUser } from 'amazon-cognito-identity-js'

var AmazonCognitoIdentity = require('amazon-cognito-identity-js')

const poolData = {
  UserPoolId : 'us-east-2_ybx9ttSac',
  ClientId : '5gcb6n0l422h0a23p52j2jb8kj'
};
var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
var attributeList = []

var dataEmail = {
  Name : 'email',
  Value : 'email@mydomain.com'
}

var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);

const createStore = () => {
  return new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {}
  })
}
