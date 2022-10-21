
    import React from 'react';

 
    import {Column,Row,Text,Img,Button,Input,Line} from 'components'
  import * as yup from 'yup'
  import {post} from 'service/api'
  import {ToastContainer,toast} from 'react-toastify'
  import 'react-toastify/dist/ReactToastify.css'
  import useForm from 'hooks/useForm'
  

    

    const SignupPage = () => {
      const [apiData, setapiData] = React.useState();
  const formValidationSchema = yup.object().shape({email:yup.string().required('Email is required').email('Please enter valid email'),username:yup.string(),password:yup.string().required('Password is required'),})
  const form = useForm({"email":"","username":"","password":""},{
        validate: true,
        validateSchema: formValidationSchema,
        validationOnChange: true
      });
  

      function callApi(data, ) {
        const req = {data: {...data,'phone': '0123', 'is_verified': 'true', 'otp': '1234', }, };
        
        post(req)
          .then((res) => {
            setapiData(res);
            
            localStorage.setItem('email', JSON.stringify(res?.email));
           
            toast.success("successs") 
          })
          .catch((err) => {
            console.error(err);
            toast.error("error\")
          });}
  

      return (<>
        <Column
    className="bg-white_A700 font-gilroymedium items-center justify-start mx-[auto] xl:pb-[114px] 2xl:pb-[128px] 3xl:pb-[153px] lg:pb-[91px] w-[100%]"
        
  
  
    
    
  

    
  ><Column
    className="items-center justify-start w-[100%]"
        
  
  
    
    
  

    
  ><header
    className="w-[100%]"
    
  
  
    
    
  
    
  ><Row
    className="bg-black_900 items-center lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] w-[100%]"
    
  
  
    
    
  
    
  ><Row
    className="items-start lg:ml-[44px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] w-[91%]"
    
  
  
    
    
  
    
  ><Column
    className="font-gilroybold items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[4%]"
        
  
  
    
    
  

    
  ><Text
    className="cursor-pointer hover:font-normal text-white_A700 w-[auto]"
     
  
  
    as="h2"
    variant="h2"
  

    
  >Logo</Text></Column><Text
    className="cursor-pointer font-gilroymedium hover:font-normal lg:ml-[436px] xl:ml-[545px] 2xl:ml-[613px] 3xl:ml-[736px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] text-white_A700 w-[auto]"
     
  
  
    as="h5"
    variant="h5"
  

    
  >Home</Text><Text
    className="hover:font-normal Clothing_One"
     
  
  
    as="h5"
    variant="h5"
  

    
  >Service</Text><Text
    className="hover:font-normal Clothing_One"
     
  
  
    as="h5"
    variant="h5"
  

    
  >About us</Text><Text
    className="hover:font-normal Clothing_One"
     
  
  
    as="h5"
    variant="h5"
  

    
  >Contact us</Text><Img
        src=
                  "images/img_search.svg"
              
        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] lg:w-[13px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[22px]"
        
  
  
    
    
  
  
        
              alt="search"
      /><Text
    className="cursor-pointer font-gilroybold hover:font-normal lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] text-white_A700 w-[auto]"
     
  
  
    as="h5"
    variant="h5"
  

    
  >Login</Text><Button
  className="font-gilroysemibold font-normal lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[10%]"
    
  
  
    
    
  
    shape="CircleBorder29"
size="sm"
variant="FillWhiteA700"
  >Sign up</Button></Row></Row></header><Column
    className="justify-start 2xl:mt-[105px] 3xl:mt-[126px] lg:mt-[74px] xl:mt-[93px] w-[88%]"
        
  
  
    
    
  

    
  ><Row
    className="items-start w-[83%]"
    
  
  
    
    
  
    
  ><Img
        src=
                  "images/img_undrawbuyhous.svg"
              
        className="lg:h-[197px] xl:h-[246px] 2xl:h-[277px] 3xl:h-[332px] 3xl:mt-[107px] lg:mt-[63px] xl:mt-[79px] 2xl:mt-[89px] w-[57%]"
        
  
  
    
    
  
  
        
              alt="undrawbuyhous"
      /><Column
    className="items-center justify-start lg:ml-[43px] xl:ml-[54px] 2xl:ml-[61px] 3xl:ml-[73px] w-[37%]"
        
  
  
    
    
  

    
  ><Column
    className="justify-start w-[100%]"
        
  
  
    
    
  

    
  ><Text
    className="capitalize font-gilroysemibold text-indigo_500 w-[auto]"
     
  
  
    as="h1"
    variant="h1"
  

    
  >Create New Account</Text><Text
    className="capitalize font-gilroy lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] not-italic text-black_901 w-[auto]"
     
  
  
    as="h4"
    variant="h4"
  

    
  >Full the Field to registration</Text><Column
    className="font-gilroymedium justify-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] rounded-radius13 w-[100%]"
        
  
  
    
    
  

    
  ><Text
    className="columnfullname"
     
  
  
    as="h4"
    variant="h4"
  

    
  >Full Name</Text><Input

  className="placeholder:text-black_900_66 Group55308"
  wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[10px] w-[100%] xl:mt-[13px]"
    
  
  type="text"
    
    
  onChange={(e,)=>{form.handleChange("username",e.target.value,)
}}
errors={form?.errors?.username}
value={form?.values?.username}

    name="Group55308"
    placeholder  = "Enter your Full Name"


  ></Input></Column><Column
    className="font-gilroymedium justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] rounded-radius13 w-[100%]"
        
  
  
    
    
  

    
  ><Text
    className="columnfullname"
     
  
  
    as="h4"
    variant="h4"
  

    
  >Email address</Text><Input

  className="placeholder:text-black_900_66 Group55308"
  wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[10px] w-[100%] xl:mt-[13px]"
    
  
  type="email"
    
    
  onChange={(e,)=>{form.handleChange("email",e.target.value,)
}}
errors={form?.errors?.email}
value={form?.values?.email}

    name="Group55308 One"
    placeholder  = "Enter your email"


  ></Input></Column><Column
    className="font-gilroymedium justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] rounded-radius13 w-[100%]"
        
  
  
    
    
  

    
  ><Text
    className="capitalize text-black_901 w-[auto]"
     
  
  
    as="h4"
    variant="h4"
  

    
  >Password</Text><Input

  className="placeholder:text-black_900_66 Group55308"
  wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[10px] w-[100%] xl:mt-[13px]"
    
  
  type="password"
    
    
  onChange={(e,)=>{form.handleChange("password",e.target.value,)
}}
errors={form?.errors?.password}
value={form?.values?.password}

    name="Group55307"
    placeholder  = "Enter Your Password"


  ></Input></Column><Button
  className="common-pointer capitalize font-gilroybold font-normal lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[100%]"
    
  
  
    
    
  onClick={()=>{form.handleSubmit(callApi)
}}

    shape="RoundedBorder13"
size="sm"
variant="FillIndigo500"
  >sign up</Button><Text
    className="capitalize font-netflixsans 3xl:ml-[110px] lg:ml-[65px] xl:ml-[82px] 2xl:ml-[92px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic text-black_901 w-[auto]"
     
  
  
    as="h5"
    variant="h5"
  

    
  ><span className="text-black_901 font-gilroymedium font-normal lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">Already Have an account?</span><span className="text-indigo_500 font-gilroymedium font-normal lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]"> </span><span className="text-indigo_500 font-gilroysemibold font-normal lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]"> </span></Text><Row
    className="font-gilroymedium items-start justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[99%]"
    
  
  
    
    
  
    
  ><Line
    className="bg-indigo_500 h-[1px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[44%]"
    
  
  
    
    
  
    
  /><Text
    className="capitalize text-indigo_500 w-[auto]"
     
  
  
    as="h3"
    variant="h3"
  

    
  >or</Text><Line
    className="bg-indigo_500 h-[1px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[44%]"
    
  
  
    
    
  
    
  /></Row><Row
    className="items-center justify-center 2xl:ml-[103px] 3xl:ml-[124px] lg:ml-[73px] xl:ml-[92px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[47%]"
    
  
  
    
    
  
    
  ><Button
  className="flex lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
  
  
  
    
    
  
  
    


><Img
        src=
                  "images/img_facebook.svg"
              
        className="flex items-center justify-center"
        
  
        
              alt="facebook"
      /></Button><Button
  className="flex lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
  
  
  
    
    
  
  
    


><Img
        src=
                  "images/img_google.svg"
              
        className="flex items-center justify-center lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
        
  
        
              alt="google"
      /></Button><Button
  className="flex lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
  
  
  
    
    
  
  
    


><Img
        src=
                  "images/img_.png"
              
        className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
        
  
        
              alt="One"
      /></Button></Row></Column></Column></Row><footer
    className="xl:mt-[120px] 2xl:mt-[135px] 3xl:mt-[162px] lg:mt-[96px] w-[100%]"
    
  
  
    
    
  
    
  ><Column
    className="justify-start w-[100%]"
        
  
  
    
    
  

    
  ><Line
    className="bg-gray_300 h-[1px] w-[100%]"
    
  
  
    
    
  
    
  /><Row
    className="font-gilroybold items-start justify-end ml-[auto] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[59%]"
    
  
  
    
    
  
    
  ><Text
    className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-black_900 w-[auto]"
     
  
  
    as="h3"
    variant="h3"
  

    
  >LOGO</Text><Row
    className="font-gilroymedium items-center justify-between lg:ml-[284px] xl:ml-[355px] 2xl:ml-[400px] 3xl:ml-[479px] w-[40%]"
    
  
  
    
    
  
    
  ><Text
    className="my-[1px] text-black_900 w-[auto]"
     
  
  
    as="h5"
    variant="h5"
  

    
  >Home</Text><Text
    className="mb-[1px] text-black_900 w-[auto]"
     
  
  
    as="h5"
    variant="h5"
  

    
  >Service</Text><Text
    className="mt-[1px] text-black_900 w-[auto]"
     
  
  
    as="h5"
    variant="h5"
  

    
  >About us</Text><Text
    className="my-[1px] text-black_900 w-[auto]"
     
  
  
    as="h5"
    variant="h5"
  

    
  >Contact us</Text></Row></Row><Text
    className="lg:ml-[372px] xl:ml-[465px] 2xl:ml-[523px] 3xl:ml-[628px] lg:mt-[39px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] text-black_900 w-[auto]"
     
  
  
    as="h6"
    variant="h6"
  

    
  >Copyright © 2021 Companyname . All Rights Reseved.</Text></Column></footer></Column></Column></Column>

        <ToastContainer />
  
      </>);
    };

    export default SignupPage;
  