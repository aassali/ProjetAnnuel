package sample;

import java.util.ArrayList;

public class User {
    private String userID;
    private String email;
    private String pseudo;
    private Integer age;
    private ArrayList<Order> previousOrders;
    private String createDate;
    private String deleteDate;

    public User(String userID, String email, String pseudo, Integer age, ArrayList<Order> previousOrders, String createDate){
        this.userID = userID;
        this.email = email;
        this.pseudo = pseudo;
        this.age = age;
        this.previousOrders = previousOrders;
        this.createDate = createDate;
    }

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPseudo() {
        return pseudo;
    }

    public void setPseudo(String pseudo) {
        this.pseudo = pseudo;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public ArrayList<Order> getPreviousOrders() {
        return previousOrders;
    }

    public void setPreviousOrders(ArrayList<Order> previousOrders) {
        this.previousOrders = previousOrders;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    public String getDeleteDate() {
        return deleteDate;
    }

    public void setDeleteDate(String deleteDate) {
        this.deleteDate = deleteDate;
    }
}
