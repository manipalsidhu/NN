$(document).ready(function () {
    $("#predictionForm").submit(function (event) {
      event.preventDefault();
      let formData = $(this).serializeArray();
  
      // Show the modal and loading spinner
      $("#resultModal").modal("show");
      $("#resultLoading").show();
      $("#resultGood").hide().removeClass("animate-scale-up");
      $("#resultSad").hide().removeClass("animate-scale-up");
  
      // Simulate a short delay (e.g., waiting for API response)
      setTimeout(function () {
        // Set a fixed mock prediction result
        const mockPrediction = 1;
  
        // Update the result text
        $("#resultText").text("The predicted First Year Persistence is: " + mockPrediction);
  
        // Hide the loading spinner and show the appropriate icon and animate it
        $("#resultLoading").hide();
        if (mockPrediction === 1) {
          $("#resultGood").show().addClass("animate-scale-up");
          $("#resultSad").hide();
        } else {
          $("#resultSad").show().addClass("animate-scale-up");
          $("#resultGood").hide();
        }
      }, 1000); // 1000 ms (1 second) delay to simulate waiting for the API response
    });
  });
  