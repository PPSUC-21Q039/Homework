/**
* @File_Name: 3.c
* @Author: Wenqiang Hu
* @Mail: huwenqiang.hwq@protonmail.com
* @Created_Time: 2022年05月18日 星期三 09时05分05秒
* @Description: 
**/

#include<stdio.h>
int main()
{
    float a,b,c; // 三角形的三边长

    printf("请输入三角形的三边长\n");
    scanf("%f %f %f", &a, &b, &c);

    if((a>=b+c) || (b>=a+c) || (c>=a+b))
    {
        printf("无法组成三角形。\n");
        return 0;
    }
    if((a==b) && (b==c))
    {
        printf("等边三角形。\n");
        return 0;
    }
    if(((a*a+b*b)==(c*c)) || ((b*b+c*c)==(a*a)) || ((c*c+a*a)==(b*b)))
    {
        printf("直角三角形。\n");
        return 0;
    }
    if((a==b) || (b==c) || (c==a))
    {
        printf("等腰三角形。\n");
        return 0;
    }
    else
    {
        printf("一般三角形。\n");
        return 0;
    }
}

