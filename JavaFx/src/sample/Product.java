package sample;

public class Product {
    private String libelle;
    private double price;
    private String barID;
    private Integer stock;
    private boolean isAlcool;

    public Product(String libelle, double prix, String barID, Integer stock, boolean isAlcool){
        this.libelle = libelle;
        this.price = prix;
        this.barID = barID;
        this.stock = stock;
        this.isAlcool = isAlcool;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getBarID() {
        return barID;
    }

    public void setBarID(String barID) {
        this.barID = barID;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    public boolean isAlcool() {
        return isAlcool;
    }

    public void setAlcool(boolean alcool) {
        isAlcool = alcool;
    }
}
