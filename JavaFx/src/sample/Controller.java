package sample;

import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.TabPane;
import javafx.scene.control.TextField;
import javafx.scene.input.MouseEvent;
import javafx.scene.layout.Pane;

import javax.swing.*;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

public class Controller {
    private Bar bar;

    @FXML
    private TextField txt_mail;

    @FXML
    private Button btn_login;

    @FXML
    private Pane pane_login;

    @FXML
    private TabPane pane_menu;

    public void authentification(MouseEvent event) throws IOException, InterruptedException {
        if (event.getSource() == btn_login) {
            boolean isExisting = false;
            String[] reccupInfos;
            Map<String,String> parserJson = new HashMap<>();

            URL url = new URL("http://localhost:3000/api/bars");
            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
            try {
                InputStream in = new BufferedInputStream(urlConnection.getInputStream());
                //System.out.println(readStream(in));
                reccupInfos = readStream(in).split(",");
                for (String s : reccupInfos) {
                    System.out.println(s);
                    if(s.contains("email")){
                        String[] test = s.split(":");
                        if(txt_mail.getText().equals(test[1].substring(1,test[1].length()-1))) {
                            isExisting = true;
                        }
                    }
                }
            } finally {
                urlConnection.disconnect();
            }

            //System.out.println(txt_mail.getText());
            //System.out.println();

            if(isExisting) {
                //bar = new Bar();
                bar = new Bar(reccupInfos);
                pane_login.setVisible(false);
                pane_menu.setVisible(true);
                System.out.println("CONNEXION");
            }
            else System.out.println("Erreur Authentification");
        }
    }

    private String readStream(InputStream is) throws IOException {
        StringBuilder sb = new StringBuilder();
        BufferedReader r = new BufferedReader(new InputStreamReader(is),1000);
        for (String line = r.readLine(); line != null; line =r.readLine()){
            sb.append(line);
        }
        is.close();
        return sb.toString();
    }

    public void logout(MouseEvent event) throws IOException, InterruptedException {
        System.out.println("deconnexion");
        int dialogResult = JOptionPane.showConfirmDialog(null,"Etes-vous sur de vouloir vous déconnecter ?","deconnexion",JOptionPane.YES_NO_OPTION,JOptionPane.WARNING_MESSAGE);
        System.out.println(dialogResult);
        if(dialogResult == 0){
            pane_menu.setVisible(false);
            pane_login.setVisible(true);
        }
    }

    public void menu(MouseEvent event) throws IOException, InterruptedException {
        System.out.println(pane_menu.getSelectionModel().getSelectedItem().getText());
        /*if (pane_menu.getSelectionModel().getSelectedItem().getText() == btn_login) {
            pane_login.setVisible(false);
            pane_menu.setVisible(true);
        }*/
    }
}
