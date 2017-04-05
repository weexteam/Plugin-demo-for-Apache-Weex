//
//  <%= iOSProjectName %>Module.m
//  WeexPluginTemp
//
//  Created by  on 17/3/14.
//  Copyright © 2017年 . All rights reserved.
//

#import "<%= iOSProjectName %>Module.h"
#import <WeexPluginLoader/WeexPluginLoader.h>

@implementation <%= iOSProjectName %>Module

WX_PlUGIN_EXPORT_MODULE(<%= iOSProjectName %>, <%= iOSProjectName %>Module)
WX_EXPORT_METHOD(@selector(show))

/**
 create actionsheet
 
 @param options items
 @param callback
 */
-(void)show
{
    UIAlertView *alertview = [[UIAlertView alloc] initWithTitle:@"title" message:@"module <%= iOSProjectName %> is created sucessfully" delegate:self cancelButtonTitle:@"cancel" otherButtonTitles:@"ok", nil];
    [alertview show];
    
}

@end
