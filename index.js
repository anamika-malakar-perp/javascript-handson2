const Calculator = (A, B, C) => 
{
    switch(A) {
        case '+':
        return B + C;
        case '-':
        return B - C;
        case '*':
        return B * C;
        case '/':
        return B / C;
    }
}

console.log('1.Operation in calculator',Calculator('*', 5, 2));

const Check_divisibility = (N) => {
    if(N%6 === 0 && N%9 === 0) {
        return 'Divisible by both';
    } else {
        return 'Not Divisible by both';
    }
    
};

console.log('2.Check divisibility by 9 and 6',Check_divisibility(81));

const isEligible = (a) => {
    if(a >= 18) {
        return 'Eligible for Voting';
    } else {
        return 'Not Eligible for Voting';
    }
};

console.log('3.Voting eligibility test',isEligible(13));

const findRelation = (x,y) => {
    if(x < y) {
        return x + ' is smaller than ' + y;
    } else if(x > y) {
        return x + ' is greater than ' + y;
    } else {
        return x + ' is equal to ' + y;
    }
};

console.log('4.The relation between two numbers', findRelation(3, 11));

const findGrades = (a) => {
    switch(a <= 50) {
        case(a <= 10):
            return 'E';
        case (a >= 11 && a <= 20): 
            return 'D';
        case (a >= 21 && a <= 30): 
            return 'C';
        case (a >= 31 && a <= 40): 
            return 'B';
        case (a >= 41 && a <= 50): 
            return 'A';
    }
};

console.log('5.To find the grades according to marks', findGrades(51));

const getValue = (a) => {
    switch(a) {
        case 'P':
        case 'p':
            return 'PerpBytes';
        case 'Z':
        case 'z':
            return 'Zenith';
        case 'E':
        case 'e':
            return 'Expert Coder';
        case 'D':
        case 'd':
            return 'Data Structure';
    } 
}; 

console.log('6.Get value from table',getValue('E'));

const Max_out_of_three = (A,B,C) => {
    
    if(A == B && B == C) {
        return '-1';
    } else if( A > B && A> C) {
        return A;
    } else if(B > A && B > C){
        return B;
    } else {
        return C;
    }
};

console.log('7.Largest number among three numbers',Max_out_of_three(3, 3, 3));

const findSndSmallest = (x,y,z) => {
    if((x<=y && x>=z) || (x<=z && x>=y)) {
        return x;
    } else if((y<=x&&y>=z)||(y<=z&&y>=x)) {
        return y;
    } else {
        return z;
    }
};

console.log('8.Second smallest number',findSndSmallest(60, 100, 20));

const Triangle_Check = (A,B,C) => {
    if((A + B + C) === 180) {
        if((A > 90 && B < 90 && C < 90) || (A < 90 && B > 90 && C < 90) || (A < 90 && B < 90 && C > 90)) {
            return 'obtuse';
        } else if(A < 90 && B < 90 && C < 90) {
            return 'acute';
        }
    }
};

console.log('9.What type of triangle checking',Triangle_Check(60, 100, 20));