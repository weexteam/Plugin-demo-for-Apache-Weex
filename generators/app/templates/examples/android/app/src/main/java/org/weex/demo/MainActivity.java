package org.weex.demo;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;

import com.alibaba.weex.plugin.loader.WeexPluginContainer;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        loadPlugin();
    }

    //TODO: This is just an example
    private void loadPlugin() {
        WeexPluginContainer.loadAll(getApplicationContext());
    }
}
