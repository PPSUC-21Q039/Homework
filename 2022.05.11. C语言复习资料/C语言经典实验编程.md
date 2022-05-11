#  C语言经典实验编程



## 判断素数

```C
#include<stdio.h>
main()
{
  	int i,x,flag=1;
  	scanf(“%d”,&x);
  	for(i=2;i<x;i++)
      	if(x%i==0) 
        {
            flag=0;
            break;
        }
  	if(flag)
     	printf(“%d 是素数 ”,x);
  	else
    	printf(“%d 不是素数 ”,x);
}
```

```C
#include<stdio.h>
int main(void)
{
	int x,y,t=0;
	printf("请输入一个整数(1<x<32767):\n");
	scanf("%d",&x);
	if(x<1||x>32767)
		printf("您的输入有误!\n");
	else
	{
		for(y=2;y<x-1;y++)
			if(x%y==0)
				printf("%d不是素数\n",x),y=x+2,t=0;
			else
				t=1;
	}
	if (t==1) 
	{ 
		printf("%d是素数\n",x);
	}
	return 0;
}
```



## 判断三角形

```C
#include<stdio.h>
void main()
{
   	float a,b,c;
   	printf("输入三个数 例：1,2,3\n");
   	scanf("%f,%f,%f",&a,&b,&c);
   	if((a>=b+c)||(b>=a+c)||(c>=a+b))
   	{
  		printf("无法组成三角形。\n");
   		return;
   	}
   	if((a==b)&&(b==c))
   	{
   		printf("此为等边三角形。\n");
   		return;
   	}
   	if(((a*a+b*b)==(c*c))||((b*b+c*c)==(a*a))||((c*c+a*a)==(b*b)))
   	{
   		printf("此为直角三角形。\n");
   		return;
   	}
   	if((a==b)||(b==c)||(c==a))
   	{
   		printf("此为等腰三角形。\n");
   		return;
   	}
   	else
   	{
   		printf("此为一般三角形。\n");
   		return;
   	}
}
```



## 矩阵
基本知识：主对角线    i==j
                   副对角线    i+j==n-1
                   上三角形    i<=j
                   下三角形    i>=j


编一个程序，求一个3×3矩阵对角线元素之和。
```C
#include<stdio.h>
main( )
{ 
	int i,j,s=0,a[3][3];
  	for ( i=0; i<3; i++ )  
  		for ( j=0; j<3; j++ )
     		scanf("%d",&a[i][j]);
  	for ( i=0; i<3; i++ )  
  	for ( j=0; j<3; j++ )
      	if ( i==j || i+j==2 ) s+=a[i][j];
  	printf("s=%d\n",s);
}
```



## 求最大（小）值

```C
#include <stdio.h>
#define M 30
main()
{ 
	int i,k,k_i,a[M];
  	for(i=0;i<M;i++)
    	scanf(“%d”,&a[i]);
  	k=a[0]; k_i=0;
  	for(i=1;i<M;i++)
     	if(k<a[i]) 
     	{
     		k=a[i]; 
     		k_i=i;
     	}
	printf(“max=%d,maxi=%d”,k, k_i);
}
```



## 编程，输入x后，根据下式计算并输出y值。

```C
#include <stdio.h>
#include <math.h>
void main( ) 
{	
	double x,y;
	scanf("%lf",&x);
	if(x<-2) 
  		y=x*x-sin(x);
	else if(x>2) 
	    y=sqrt(x*x+x+1);
	else
     	y=pow(2,x)+x;
	printf("y=%f\n",y);
}
```



## 求 xn

```C
#include <stdio.h>
void main( )
{    
    int i, n;
    double x, power ;
    printf("input x, n: \n");
    scanf ("%lf %d", &x, &n) ;
    power = 1;         	/* 置power的初值为1 */
 	for ( i = 1; i <= n; i++ )/* 循环重复n次，计算x的n次幂 */
         power = power * x;
    printf( "%0.f\n", power);
}

double expon(double x , int n) 
{
	int i ;
    double power = 1.0;
    for ( i = 1 ; i <= n; i++ )
    	power = power * x;
    return power ;
}
```



## 输出2~100之间所有的素数

```C
#include<math.h>
#include<stdio.h>
main()
{
	int m,i,k,n=0;
	for(m=1;m<=100;m=m+2)
	{
		k=sqrt(m);
		for(i=2;2<=k;i++)
			if(m%i==0)
				break;
		if(i>=k+1)
		{
			printf("%d",m);
			n=n+1;
		}
		if(n%n==0)
			printf("\n");
	}
	printf("\n");
	return 0;
}
```



## 用筛选法求100之内的素数。

```C
#include<stdio.h>
#include<math.h>
int main()
{    
	{printf("100内所有素数为：\n");}
	int i,j,n,a[101];    
	for(i = 1; i <= 100; i++)       
		a[i] = i;    
	a[0] = 0;    
	for (j = 1; j <= 100; ++j)    
	{        
		for (i = 2; i <= sqrt(j); ++i)        
		{            
			if (j % i == 0)            
			{
				break;
			}                    
		}        
		if (i > sqrt(j))        
		{
			printf("%5d",j);
		}    
	}    
	printf("\n");
}
```



## 乘法表

```C
#include<stdio.h>
void main()
{
	int i=1;
	for(i;i<=9;i++)
	{
		int j=1;
		for(j;j<=i;j++)
		{
			printf("%d*%d=%d ",i,j,i*j);
		}
    	printf("\n");
	}
}
```



## 输入一行字符，分别统计出其中英文字母（区分大小）、空格、数字和其他字符的个数。

```C
#include<stdio.h>
int main(void)
{
	char ch;
	int Lletter,Sletter,digit,space,other;
	Lletter=Sletter=digit=space=other=0;
	printf("输入一行字符：");
	ch=getchar();
	while(ch!='\n')
	{
		if(ch>='A'&&ch<='Z')
			Lletter++;
		else if(ch>='a'&&ch<='z')
			Sletter++;
		else if(ch>='0'&&ch<='9')
			digit++;
		else if(ch==' ')
			space++;
		else
			other++;
		ch=getchar();
	}
	printf("大写字母=%d,小写字母=%d,数字=%d,空格=%d,其他=%d\n",Lletter,Sletter,digit,space,other);
	return 0;
}
```



## 输出所有的三位“水仙花数”

```C
#include<stdio.h>
void main()
{
	int i,j,k,m1,m2;
	for(i=1;i<=9;i++)
		for(j=0;j<=9;j++)
			for(k=0;k<=9;k++)
			{
				m1=i*100+j*10+k;
				m2=i*i*i+j*j*j+k*k*k;
				if(m1==m2)
					printf("%3d ",m1);
			}
	printf("\n");
}
```



## 输入一行字符，统计其中有多少个单词；

```C
#include<stdio.h>
int main()
{    
	printf("输入一段字符：  如:how are you\n");
    int num = 0, word = 0, i = 0;    
	char str[40];    
	gets(str);    
	while(str[i] != '\0')    
	{ 
		if(str[i] == ' ') 
		{
			word = 0;
		} 
		else 
		{    
			if(0 == word)    
			{
				num++;  
				word = 1;
			}    
			else    
			{
				word = 1;
			} 
		} 
		i++;    
	}    
	printf("单词数为：%d\n",num);    
	return 0;
}
```



## 冒泡法将一个数组按从小到大的次序排序

```C
#include <stdio.h>
int main()
{
	int a[10];
	int i,j,t;
	printf("输入十个数，例：1 2 3\n");
	for(i=0;i<10;i++)
		scanf("%d",&a[i]);
	printf("\n");
	for(j=0;j<9;j++)
	 	for(i=0;i<9-j;i++)
	   		if(a[i]>a[i+1])
	   		{
                t=a[i];
                a[i]=a[i+1];
                a[i+1]=t;
           	}
	printf("由小到大排序为：\n");
	for(i=0;i<10;i++)
		printf("%d ",a[i]);
	printf("\n");
	return 0;
}
```
