/**
* @File_Name: 2.c
* @Author: Wenqiang Hu
* @Mail: huwenqiang.hwq@protonmail.com
* @Created_Time: 2022年05月28日 星期六 08时02分26秒
* @Description: 
**/

#include <stdio.h>
#include <string.h>
#define MAX 100

void swap(char *s1, char *s2)
{
    char temp[MAX];
    strcpy(temp, s1);
    strcpy(s1, s2);
    strcpy(s2, temp);
} 

int strcmp_self(char *str_1, char *str_2)
{
    while ((*str_1 != '\0') && (*str_1 == *str_2))
    {
        str_1++;
        str_2++;
    }
    int result = *str_1 - *str_2;
    return result;
}

void main()
{
    char str_1[MAX], str_2[MAX], str_3[MAX];

    fgets(str_1, MAX, stdin);
    fgets(str_2, MAX, stdin);
    fgets(str_3, MAX, stdin);

    if(strcmp_self(str_1, str_2) > 0) 
        swap(str_1, str_2);
    if(strcmp_self(str_1, str_3) > 0) 
        swap(str_1, str_3);
    if(strcmp_self(str_2, str_3) > 0) 
        swap(str_2, str_3);

    printf("%s\n%s\n%s\n", str_1, str_2, str_3);
    return 0;
}

