package sample;

import java.util.ArrayList;

public class Order {
    private String barID;
    private String userId;
    private String createDate;
    private ArrayList<Drink> drinks;
    private boolean validate;
    private double price;
    private Integer nbDrinks;

    public Order(String barID, String userID, String createDate, ArrayList<Drink> drinks, boolean validate, double price, Integer nbDrinks){
        this.barID = barID;
        this.userId = userID;
        this.createDate = createDate;
        this.drinks = drinks;
        this.validate = validate;
        this.price = price;
        this.nbDrinks = nbDrinks;
    }

    public String getBarID() {
        return barID;
    }

    public void setBarID(String barID) {
        this.barID = barID;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    public ArrayList<Drink> getDrinks() {
        return drinks;
    }

    public void setDrinks(ArrayList<Drink> drinks) {
        this.drinks = drinks;
    }

    public boolean isValidate() {
        return validate;
    }

    public void setValidate(boolean validate) {
        this.validate = validate;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Integer getNbDrinks() {
        return nbDrinks;
    }

    public void setNbDrinks(Integer nbDrinks) {
        this.nbDrinks = nbDrinks;
    }
}
