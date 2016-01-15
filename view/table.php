<div class="container angulardata">
 <h2 class="intro-text text-center">Wifihotspots Antwerpen</h2>
  <table class="table table-bordered table-responsive">
    <thead>
    <tr>
      <th>Straat</th>
      <th>Huisnummer</th>
      <th>Gemeente</th>
      <th>Postcode</th>
    </tr>
      <tr ng-repeat="x in json">
        <td>{{x.straat}}</td>
        <td>{{x.huisnr}}</td>
        <td>{{x.gemeente}}</td>
        <td>{{x.postcode}}</td>
      </tr>
    </tbody>
  </table>
</div>


</div>
</div> 
