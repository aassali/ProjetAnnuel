package sample;

import java.util.ArrayList;

public class Drink {
    private String libelle;
    private String barID;
    private String description;
    private ArrayList<Product> recipe;

    public Drink(String libelle, String barID, String description, ArrayList<Product> recipe){
        this.libelle = libelle;
        this.barID = barID;
        this.description = description;
        this.recipe = recipe;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public String getBarID() {
        return barID;
    }

    public void setBarID(String barID) {
        this.barID = barID;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ArrayList<Product> getRecipe() {
        return recipe;
    }

    public void setRecipe(ArrayList<Product> recipe) {
        this.recipe = recipe;
    }
}
