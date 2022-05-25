/**
* @File_Name: dyy.c
* @Author: Wenqiang Hu
* @Mail: huwenqiang.hwq@protonmail.com
* @Created_Time: 2022年05月18日 星期三 09时10分57秒
* @Description: 
**/

#include<stdio.h>

int main()
{
	const float PI = 3.14; //PI
	float r, h;
    float C1,S,S1,V1,V2,V3;

	scanf("%f %f", &r, &h);
	C1 = PI * 2 * r; // 圆周长
	S = PI * r * r; // 圆面积
	S1 = 4 * PI * r * r; // 球表面积
	V1 = (4 / 3) * PI * r * r * r; // 球体积
	V2 = PI * r * r * h; // 圆柱体积
	V3 = (1 / 3 * PI * r * r * h); // 圆锥体积

	printf("圆的周长是: %.2f\n",C1);
	printf("圆的面积是: %.2f\n",S);
	printf("球的表面积是: %.2f\n",S1);
	printf("球的体积是: %.2f\n",V1);
	printf("圆柱的体积是: %.2f\n",V2);
	printf("圆锥的体积是: %.2f\n",V3);

	return 0;
}
