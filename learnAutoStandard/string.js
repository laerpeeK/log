//1.字符串统一使用单引号的形式
const department = 'JDC'


//2.字符串太长时，请不要使用字符串连接符换行\，而是使用+
const str = '凹凸实验室 凹凸实验室 凹凸实验室' +
    '凹凸实验室 凹凸实验室 凹凸实验室' +
    '凹凸实验室 凹凸实验室'

    
//3.程序化生成字符串时，请使用模板字符串
const test = 'test'
const str = `ab${test}`

//4.不要对字符串使用eval()，会导致太多漏洞


//5.不要在字符串中使用不必要的转义字符
const namez  = 'JD'
const foo = '\'this\' is "quoted'
const foo = `my name is '${namez}'`
