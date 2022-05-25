/**
* @File_Name: 3.c
* @Author: Wenqiang Hu
* @Mail: huwenqiang.hwq@protonmail.com
* @Created_Time: Wed May 25 10:01:55 2022
* @Description: 
**/

#include <stdio.h>

int main()
{
    int valuation[1000] = {0};
    int count = 0;
    int input;
    int size = 0;
    int grade_1 = 0, \
        grade_2 = 0, \
        grade_3 = 0, \
        grade_4 = 0, \
        grade_5 = 0;
    
    while(1) {
        scanf ("%d", &input);
        if (input != -1) // 由于是理想输入，故不对输入内容的合法性进行校验
        {
            valuation[count] = input;
            count = count + 1;
        }
        else
        {
            break;
        }
    }
    size = count;

    for (int i = 0; i < 1000; i++)
    {
        if ()
