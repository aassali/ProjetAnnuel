package sample;

import java.util.ArrayList;

public class Bar {

    private String id;
    private String mail;
    private String nom;
    private String site;
    private String createDate;
    private ArrayList<Drink> carte;
    private ArrayList<Order> commande;
    private ArrayList<Product> stock;

    public Bar(){}

    public Bar(String[] infos){
        for (String s: infos) {
            if (s.contains("_id")) {
                String[] barId = s.split(":");
                this.setId(barId[1].substring(1, barId[1].length() - 1));
            }
            if (s.contains("email")) {
                String[] barMail = s.split(":");
                this.setMail(barMail[1].substring(1, barMail[1].length() - 1));
            }
            if (s.contains("name")) {
                String[] barName = s.split(":");
                this.setNom(barName[1].substring(1, barName[1].length() - 1));
            }
            if (s.contains("webSite")) {
                String[] barSite = s.split(":");
                this.setSite(barSite[1].substring(1, barSite[1].length() - 1));
            }
            if (s.contains("createDate")) {
                String[] barCreateDate = s.split(":");
                this.setCreateDate(barCreateDate[1].substring(1, barCreateDate[1].length() - 1));
            }
            /*if (s.contains("stock")) {
                this.setStock();
            }*/
        }
    }

    public Bar(String id,String mail, String nom, String site, ArrayList<Drink> carte, ArrayList<Order> commande, ArrayList<Product> stock){
        this.setId(id);
        this.setMail(mail);
        this.setNom(nom);
        this.setSite(site);
        this.setCarte(carte);
        this.setCommande(commande);
        this.setStock(stock);
    }


    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public ArrayList<Drink> getCarte() {
        return carte;
    }

    public void setCarte(ArrayList<Drink> carte) {
        this.carte = carte;
    }

    public ArrayList<Order> getCommande() {
        return commande;
    }

    public void setCommande(ArrayList<Order> commande) {
        this.commande = commande;
    }

    public ArrayList<Product> getStock() {
        return stock;
    }

    public void setStock(ArrayList<Product> stock) {
        this.stock = stock;
    }

    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }
}
