//* ****************************************************
//* Switch Case In JavaScript
//* ****************************************************


//* *********************** Syntax **********************
    /*
        switch (expression) {
            case caseExpression1:
                statements
                break;
            case caseExpression2:
                statements
                break;
            .....
            case caseExpressionN:
                statements
                break;
            default:
                statements
        }
    */
//* *******************************************************


//* *******************************************************
    const month = 3;
    switch (month) {
        case 1:
            console.log(`January`);
            break;

        case 2:
            console.log(`Febuary`);
            break;

        case 3:
            console.log(`March`);
            break;

        case 4:
            console.log(`April`);
            break;

        case 5:
            console.log(`May`);
            break;

        default:
            console.log(`Default case`);
            break;
    }


    const expr = "Mangoes";
    switch (expr) {
        case "Oranges":
          console.log("Oranges are $0.59 a pound.");
          break;

        case "Apples":
          console.log("Apples are $0.32 a pound.");
          break;

        case "Bananas":
          console.log("Bananas are $0.48 a pound.");
          break;

        case "Cherries":
          console.log("Cherries are $3.00 a pound.");
          break;

        case "Mangoes":
        case "Papayas":
          console.log("Mangoes and papayas are $2.79 a pound.");
          break;

        default:
          console.log(`Sorry, we are out of ${expr}.`);
      }

//* *******************************************************


