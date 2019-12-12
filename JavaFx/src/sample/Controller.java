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
    private String targetURL = "https://projet-annuel-node.herokuapp.com/api/bars";//"http://localhost:3000/api/bars"

    @FXML
    private TextField txt_mail;
    @FXML
    private TextField txt_psw;
    @FXML
    private TextField info_mail;
    @FXML
    private TextField info_nom;
    @FXML
    private TextField info_site;

    @FXML
    private Button btn_login;
    @FXML
    private Button btn_editInfo;

    @FXML
    private Pane pane_login;

    @FXML
    private TabPane pane_menu;

    public void authentification(MouseEvent event) throws IOException, InterruptedException {
        if (event.getSource() == btn_login) {
            boolean isExisting = false;
            String[] reccupInfos;
            //Map<String,String> parserJson = new HashMap<>();

            URL url = new URL(targetURL);
            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
            try {
                InputStream in = new BufferedInputStream(urlConnection.getInputStream());
                reccupInfos = readStream(in).split(",");
                for (String s : reccupInfos) {
                    //System.out.println(s);
                    if(s.contains("email")){
                        String[] test = s.split(":");
                        if(txt_mail.getText().equals(test[1].substring(1,test[1].length()-1))) {
                            isExisting = true;
                            System.out.println(txt_psw.getText());
                        }
                    }
                    /*if(isExisting){
                        for (String getID : reccupInfos) {
                            //System.out.println(s);
                            if (getID.contains("_id")) {
                                String[] test = getID.split(":");
                                String barId = test[1].substring(1, test[1].length() - 1);
                            }
                        }
                    }*/
                    //System.out.println(txt_psw.getText());
                }
            } finally {
                urlConnection.disconnect();
            }

            //System.out.println(txt_mail.getText());
            //System.out.println();

            if(isExisting) {
                //bar = new Bar();
                bar = new Bar(reccupInfos);
                displayInfoBar(bar);
                pane_login.setVisible(false);
                pane_menu.setVisible(true);
                System.out.println("CONNEXION");
            }
            else {
                System.out.println("Erreur Authentification");
                JOptionPane.showMessageDialog(null,"Les identifiants renseignés sont incorrects. Veuillez renouvellez l'authentification pour vous connecter.","Identifiants incorrects",0); // .showConfirmDialog(null,Les identifiants renseignés sont incorrects. Veuillez renouvellez l'authentification pour vous connecter.","Identifiants incorrects !",JOptionPane.OK_OPTION,JOptionPane.WARNING_MESSAGE);
            }
        }
    }

    private void displayInfoBar(Bar bar) {
        info_mail.setText(bar.getMail());
        info_nom.setText(bar.getNom());
        info_site.setText(bar.getSite());
        //System.out.println(bar.getMail() + bar.getNom() + bar.getSite());
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
            txt_mail.setText("");
            txt_psw.setText("");
            pane_menu.setVisible(false);
            pane_login.setVisible(true);
        }
    }

    public void editInfo(MouseEvent event) throws IOException, InterruptedException {
        System.out.println("modification");
        String editInfoMail;
        String editInfoName;
        String editInfoSite;

        if(info_mail.getText().equals("")) editInfoMail = bar.getMail();
        else editInfoMail = info_mail.getText();
        if(info_nom.getText().equals("")) editInfoName = bar.getNom();
        else editInfoName = info_nom.getText();
        if(info_site.getText().equals("")) editInfoMail = bar.getSite();
        else editInfoSite = info_site.getText();

    }

    public void menu(MouseEvent event) throws IOException, InterruptedException {
        System.out.println(pane_menu.getSelectionModel().getSelectedItem().getText());
        /*if (pane_menu.getSelectionModel().getSelectedItem().getText() == btn_login) {
            pane_login.setVisible(false);
            pane_menu.setVisible(true);
        }*/
    }
}
