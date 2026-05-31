import java.io.*;

public class JavaIOStreamsDemo {

    // Method to write data using FileOutputStream
    public static void writeUsingFileOutputStream() {
        try {
            FileOutputStream fos = new FileOutputStream("students.txt");

            String data = "101,Ravi,Java\n";
            data += "102,Sita,Python\n";
            data += "103,Ram,NodeJS\n";
            data += "104,Krishna,ReactJS\n";

            byte[] bytes = data.getBytes();

            fos.write(bytes);

            System.out.println("Data written using FileOutputStream.");

            fos.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    // Method to read data using FileInputStream
    public static void readUsingFileInputStream() {
        try {
            FileInputStream fis = new FileInputStream("students.txt");

            int ch;

            System.out.println("\nReading using FileInputStream:");

            while ((ch = fis.read()) != -1) {
                System.out.print((char) ch);
            }

            fis.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    // Method to write data using BufferedWriter
    public static void writeUsingBufferedWriter() {
        try {
            BufferedWriter bw =
                    new BufferedWriter(
                            new FileWriter("employees.txt"));

            bw.write("201,John,Manager");
            bw.newLine();

            bw.write("202,David,Developer");
            bw.newLine();

            bw.write("203,Smith,Tester");
            bw.newLine();

            bw.write("204,Alex,Designer");
            bw.newLine();

            bw.write("205,Robert,Analyst");
            bw.newLine();

            bw.flush();
            bw.close();

            System.out.println("\nData written using BufferedWriter.");

        } catch (Exception e) {
            System.out.println(e);
        }
    }

    // Method to read data using BufferedReader
    public static void readUsingBufferedReader() {
        try {

            BufferedReader br =
                    new BufferedReader(
                            new FileReader("employees.txt"));

            String line;

            System.out.println("\nReading using BufferedReader:");

            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }

            br.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }

    // Count characters in file
    public static void countCharacters() {
        try {

            FileInputStream fis =
                    new FileInputStream("students.txt");

            int count = 0;

            while (fis.read() != -1) {
                count++;
            }

            fis.close();

            System.out.println(
                    "\nTotal Characters in students.txt = "
                            + count);

        } catch (Exception e) {
            System.out.println(e);
        }
    }

    // Count lines in file
    public static void countLines() {
        try {

            BufferedReader br =
                    new BufferedReader(
                            new FileReader("employees.txt"));

            String line;

            int count = 0;

            while ((line = br.readLine()) != null) {
                count++;
            }

            br.close();

            System.out.println(
                    "Total Lines in employees.txt = "
                            + count);

        } catch (Exception e) {
            System.out.println(e);
        }
    }

    // Append data using BufferedWriter
    public static void appendData() {
        try {

            BufferedWriter bw =
                    new BufferedWriter(
                            new FileWriter(
                                    "employees.txt",
                                    true));

            bw.newLine();
            bw.write("206,Michael,HR");

            bw.close();

            System.out.println(
                    "\nNew Record Added Successfully.");

        } catch (Exception e) {
            System.out.println(e);
        }
    }

    // Display final file content
    public static void displayFinalContent() {
        try {

            BufferedReader br =
                    new BufferedReader(
                            new FileReader("employees.txt"));

            String line;

            System.out.println(
                    "\nFinal Employee Records:");

            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }

            br.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }

    // Main Method
    public static void main(String[] args) {

        System.out.println(
                "===== JAVA I/O STREAMS DEMO =====");

        // FileOutputStream
        writeUsingFileOutputStream();

        // FileInputStream
        readUsingFileInputStream();

        // BufferedWriter
        writeUsingBufferedWriter();

        // BufferedReader
        readUsingBufferedReader();

        // Count characters
        countCharacters();

        // Count lines
        countLines();

        // Append new data
        appendData();

        // Display final content
        displayFinalContent();

        System.out.println("\n===== PROGRAM COMPLETED =====");
    }
}