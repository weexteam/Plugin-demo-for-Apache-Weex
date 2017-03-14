# coding: utf-8

Pod::Spec.new do |s|
  s.name         = "WeexActionSheet"
  s.version      = "0.0.5"
  s.summary      = "Weex Action Sheet"

  s.description  = <<-DESC
                   Weexplugin Source Description
                   DESC

  s.homepage     = "https://github.com/kfeagle/weex-action-sheet.git"
  s.license = {
    :type => 'Copyright',
    :text => <<-LICENSE
           Alibaba-INC copyright
    LICENSE
  }
  s.authors      = {
                     "kfeagle" =>"sunjjbobo@163.com"
                   }
  s.platform     = :ios
  s.ios.deployment_target = "7.0"

  s.source       = { :git => 'https://github.com/kfeagle/weex-action-sheet.git', :tag => '0.0.5' }
  #s.source       = { :git => 'https://github.com/kfeagle/weex-action-sheet.git' }
  s.source_files  = "ios/Sources/**/*.{h,m,mm}"
  
  s.requires_arc = true
  s.dependency "WeexPlugin"
  s.dependency "WeexSDK"
end
