        // condition

        // if(condition){
        //     body;
        // }


        const isUserLoggedIn=true
        if(isUserLoggedIn){
            console.log(isUserLoggedIn);
        }

        // false value :- false,0,-0,BigInt 0n, null, undifined, NaN

        // truthy value :- "0",'false'," ", [],{}, function(){}

        //conditions
        // <,>,<=,>=,==,!=,===


        // switch condition

        // switch (key) {
        //     case value:
                
        //         break;
        
        //     default:
        //         break;
        // }



        // Nullish Coalescing Operator (??): null, undefind

        let val1;
        // val1 = 5 ?? 10
        // val1=null ?? 10
        // val1= undefined ?? 13
        val1=null ?? 20 ?? 10

        console.log(val1);

