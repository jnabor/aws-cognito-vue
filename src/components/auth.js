var AmazonCognitoIdentity = require('amazon-cognito-identity-js')

const poolData = {
  UserPoolId: 'us-east-2_ybx9ttSac',
  ClientId: '5gcb6n0l422h0a23p52j2jb8kj'
}

var userPool = []
var attributeList = []
var dataEmail = {
  Name: 'email',
  Value: ''
}

export function Register (username, password) {
  dataEmail.Value = username
  var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail)
  attributeList.push(attributeEmail)
  console.log('attribute list: ' + attributeList)
  userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData)
  console.log('sign up with: ' + username + ' ' + password)
  console.log(this)

  userPool.signUp(username, password, attributeList, null, function (err, result) {
    console.log('sign up callback')
    console.log(this)
    if (err) {
      console.log('sign up error: ' + JSON.stringify(err))
      return
    }
    console.log('sign up success: ' + JSON.stringify(result))
    console.log('user name is ' + result.user.getUsername())
  })
}
