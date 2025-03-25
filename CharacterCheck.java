/*import java.util.*;
class CharacterCheck{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the character");
        String input = sc.nextLine();
         char ch = input.charAt(0);

         if(Character.isLetter(ch)){
            System.out.println("Enter character is Alphabet " +ch);
         }
         else if(Character.isDigit(ch)){
            System.out.println("Enter character is Digit" +ch);
         }
         else{
            System.out.println("Enter Character is symbol" +ch);
         }
    }
}*/

//WAP to input a character from user and check whether it is uppercase and lowercase.

import java.util.*;
class CharacterCheck{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the character");
        String input = sc.nextLine();
         char ch = input.charAt(0);

         if(Character.isUpperCase(ch)){
            System.out.println("Enter character is Uppercase " +ch);
         }
         else {
            System.out.println("Enter character is Lowercase" +ch);
         }
    }
}